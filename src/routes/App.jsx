import React, { PureComponent, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as themes from '../themes';
import routes from './routes';

import * as actions from '../stores/actions';

import Header from '../views/Header';
import Loader from '../views/LinearLoader';
import Selection from '../views/Selection';

const AppContainer = styled.div`
  text-align: center;
`;

class App extends PureComponent {
  state = {
    selectedTheme: themes['defaultTheme'],
    authenticated: false
  };
  componentDidMount() {
    this.props.fetchUser();
  }
  static getDerivedStateFromProps = (props, state) => {
    return { ...state, ...props };
  };
  handleThemeChange = selectedTheme => {
    this.setState({
      selectedTheme: themes[selectedTheme]
    });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.selectedTheme}>
        <AppContainer>
          <BrowserRouter>
            <Fragment>
              <Loader loading={this.state.loading} />
              <Header username={'guest'} />
              {Object.keys(routes).map(route => (
                <Route
                  key={route}
                  exact
                  path={routes[route].path}
                  component={routes[route].component()}
                />
              ))}
            </Fragment>
          </BrowserRouter>
          <Selection
            onChange={this.handleThemeChange}
            selections={Object.keys(themes)}
          />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ authStore }) => ({
  authenticated: !!authStore.user,
  loading: authStore.loading
});

export default connect(
  mapStateToProps,
  actions
)(App);
