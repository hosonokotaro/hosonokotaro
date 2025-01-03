import React from 'react';
import { useLocation } from 'react-router-dom';

import MenuItem from '@/MenuItem';
import { StyledMenuList, StyledNav } from '@/styledMenuList';

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

export default MenuList;
