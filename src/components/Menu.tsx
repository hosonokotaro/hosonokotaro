import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

import txtNavTop from '../images/txt_nav_top.png';
import txtNavTopActive from '../images/txt_nav_top_active.png';
import txtNavWork from '../images/txt_nav_work.png';
import txtNavWorkActive from '../images/txt_nav_work_active.png';
import txtNavContact from '../images/txt_nav_contact.png';
import txtNavContactActive from '../images/txt_nav_contact_active.png';

type MenuProps = {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <AreaMenu>
      <MenuList>
        <MenuItem
          active={true}
          to="/"
          imagePath={txtNavTop}
          currentImagePath={txtNavTopActive}
          label="TOP"
          onClick={props.onClick}
        />
        <MenuItem
          active={false}
          to="/work/"
          imagePath={txtNavWork}
          currentImagePath={txtNavWorkActive}
          label="WORK"
          onClick={props.onClick}
        />
        <MenuItem
          active={false}
          to="/contact/"
          imagePath={txtNavContact}
          currentImagePath={txtNavContactActive}
          label="CONTACT"
          onClick={props.onClick}
        />
      </MenuList>
    </AreaMenu>
  );
};

const AreaMenu = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: -5px;
  border-bottom: 1px solid #333;
`;

export default Menu;