import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import routes from '../routes/routes';
import * as actions from '../stores/actions';

const List = styled.ul`
  float: right;
  margin: 0 auto;
  color: inherit;
`;
const ListItemStyled = styled.li`
  display: inline-block;
  padding: 0 0.5rem;
`;
const StyledButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  outline: none;
  padding: 0;
  cursor: pointer;
`;

const ListItem = ({ route }) => {
  return (
    <ListItemStyled>
      <Link to={route.path}>{route.placeholder}</Link>
    </ListItemStyled>
  );
};

const HeaderNav = ({ authenticated, logoutUser }) => (
  <List>
    {Object.keys(routes).map(route => (
      <ListItem key={route} route={routes[route]} />
    ))}
    {authenticated ? (
      <ListItemStyled>
        <StyledButton onClick={logoutUser}>Logout</StyledButton>
      </ListItemStyled>
    ) : (
      <ListItemStyled>
        <a href="/auth/google">Login with Google+</a>
      </ListItemStyled>
    )}
  </List>
);

const mapStateToProps = ({ authStore }) => ({
  authenticated: !!authStore.user
});

export default connect(
  mapStateToProps,
  actions
)(HeaderNav);
