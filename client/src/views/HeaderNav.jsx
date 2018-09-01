import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import routes from '../routes/routes';
import * as actions from '../stores/actions';

const StyledList = styled.ul`
  color: inherit;
  display: inline-block;
  margin: 0 auto;
  padding: 0;
`;
const StyledListItem = styled.li`
  display: inline-block;
  line-height: ${props => props.theme.headerHeight};
  padding: 0 0.5rem;
`;

const ListItem = ({ route }) => {
  return (
    <StyledListItem>
      <Link to={route.path}>{route.placeholder}</Link>
    </StyledListItem>
  );
};

const HeaderNav = () => (
  <StyledList>
    {Object.keys(routes).map(route => (
      <ListItem key={route} route={routes[route]} />
    ))}
  </StyledList>
);

const mapStateToProps = ({ authStore }) => ({
  authenticated: !!authStore.user
});

export default connect(
  mapStateToProps,
  actions
)(HeaderNav);
