import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import HeaderNav from './HeaderNav';

import * as actions from '../stores/actions';

const Nav = styled.nav`
  padding: 1rem;
  text-align: initial;
  color: ${props => props.theme.textOnPrimary};
  background-color: ${props => props.theme.primary};
`;

const StyledList = styled.ul`
  color: inherit;
  float: right;
  margin: 0 auto;
`;
const StyledListItem = styled.li`
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

const Header = ({ user, authenticated, logoutUser }) => {
  const UserNameButton = () => {
    if (!user || !user.displayName) return null;
    return (
      <StyledListItem>
        <a href="/dashboard">Welcome, {user.displayName}</a>
      </StyledListItem>
    );
  };
  return (
    <Nav>
      <StyledList>
        <UserNameButton />
        {authenticated ? (
          <StyledListItem>
            <StyledButton onClick={logoutUser}>Logout</StyledButton>
          </StyledListItem>
        ) : (
          <StyledListItem>
            <a href="/auth/google">Login with Google+</a>
          </StyledListItem>
        )}
      </StyledList>
      <HeaderNav />
    </Nav>
  );
};

const mapStateToProps = ({ authStore }) => ({
  authenticated: !!authStore.user,
  user: authStore.user
});

export default connect(
  mapStateToProps,
  actions
)(Header);
