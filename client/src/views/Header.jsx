import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import HeaderNav from './HeaderNav';

import * as actions from '../stores/actions';

const Nav = styled.nav`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textOnPrimary};
  display: inline-block;
  height: ${props => props.theme.headerHeight};
  text-align: initial;
  width: 100%;
`;

const StyledList = styled.ul`
  color: inherit;
  float: right;
  margin: 0 auto;
`;
const StyledListItem = styled.li`
  display: inline-block;
  line-height: ${props => props.theme.headerHeight};
  padding: 0 0.5rem;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  font: inherit;
  height: ${props => props.theme.headerHeight};
  outline: none;
  padding: 0;
`;

const Header = ({ user, authenticated, logoutUser }) => {
  const UsernameButton = () => {
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
        {authenticated ? (
          <Fragment>
            <UsernameButton />
            <StyledListItem>Credit: {user.credits}</StyledListItem>
            <StyledListItem>
              <StyledButton onClick={logoutUser}>Logout</StyledButton>
            </StyledListItem>
          </Fragment>
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
