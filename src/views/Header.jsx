import React from 'react';
import styled from 'styled-components';

import HeaderNav from '../containers/HeaderNav';

const Nav = styled.nav`
  padding: 1rem;
  text-align: initial;
  color: ${props => props.theme.textOnPrimary};
  background-color: ${props => props.theme.primary};
`;

const Header = ({ username }) => {
  return (
    <Nav>
      Welcome
      {`, ${username}`}
      <HeaderNav />
    </Nav>
  );
};

export default Header;
