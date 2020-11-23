import React from 'react';

import Picture from './Picture';
import { StyledMenuItem, StyledLink } from './styledMenuItem';

import txtNavTop from '../images/txt_nav_top.png';
import txtNavTopActive from '../images/txt_nav_top_active.png';
import txtNavWork from '../images/txt_nav_work.png';
import txtNavWorkActive from '../images/txt_nav_work_active.png';
import txtNavContact from '../images/txt_nav_contact.png';
import txtNavContactActive from '../images/txt_nav_contact_active.png';

type MenuItemProps = {
  top: boolean;
  work: boolean;
  contact: boolean;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <>
      <StyledMenuItem>
        <StyledLink to="/" className={props.top ? 'link-current' : ''}>
          <Picture
            srcPC={props.top ? txtNavTopActive : txtNavTop}
            srcSP={props.top ? txtNavTopActive : txtNavTop}
            alt="TOP"
          />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink to="/work/" className={props.work ? 'link-current' : ''}>
          <Picture
            srcPC={props.work ? txtNavWorkActive : txtNavWork}
            srcSP={props.work ? txtNavWorkActive : txtNavWork}
            alt="WORK"
          />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink
          to="/contact/"
          className={props.contact ? 'link-current' : ''}
        >
          <Picture
            srcPC={props.contact ? txtNavContactActive : txtNavContact}
            srcSP={props.contact ? txtNavContactActive : txtNavContact}
            alt="CONTACT"
          />
        </StyledLink>
      </StyledMenuItem>
    </>
  );
};

export default MenuItem;
