import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const MenuList: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <StyledMenuList>
        <MenuItem
          top={pathname === '/'}
          work={pathname === '/work/'}
          contact={pathname === '/contact/'}
        />
      </StyledMenuList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledMenuList = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: -5px;
  border-bottom: 1px solid #333;
`;

export default MenuList;
