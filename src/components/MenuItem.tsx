import React from 'react';

import Picture from '@/Picture';
import { StyledLink, StyledMenuItem } from '@/styledMenuItem';
import txtNavContact from '~/images/txt_nav_contact.png';
import txtNavContactActive from '~/images/txt_nav_contact_active.png';
import txtNavTop from '~/images/txt_nav_top.png';
import txtNavTopActive from '~/images/txt_nav_top_active.png';
import txtNavWork from '~/images/txt_nav_work.png';
import txtNavWorkActive from '~/images/txt_nav_work_active.png';

type MenuItemProps = {
  top: boolean;
  work: boolean;
  contact: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ top, work, contact }) => {
  return (
    <>
      <StyledMenuItem>
        <StyledLink to="/" className={top ? 'link-current' : ''}>
          <Picture
            srcPC={top ? txtNavTopActive : txtNavTop}
            srcSP={top ? txtNavTopActive : txtNavTop}
            alt="TOP"
          />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink to="/work/" className={work ? 'link-current' : ''}>
          <Picture
            srcPC={work ? txtNavWorkActive : txtNavWork}
            srcSP={work ? txtNavWorkActive : txtNavWork}
            alt="WORK"
          />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink to="/contact/" className={contact ? 'link-current' : ''}>
          <Picture
            srcPC={contact ? txtNavContactActive : txtNavContact}
            srcSP={contact ? txtNavContactActive : txtNavContact}
            alt="CONTACT"
          />
        </StyledLink>
      </StyledMenuItem>
    </>
  );
};

export default MenuItem;
