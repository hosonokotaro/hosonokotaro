import React from 'react';

import Picture from '@/Picture';
import { StyledLink, StyledMenuItem } from '@/styledMenuItem';

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
            srcPC={
              top ? '/images/txt_nav_top_active.png' : '/images/txt_nav_top.png'
            }
            srcSP={
              top ? '/images/txt_nav_top_active.png' : '/images/txt_nav_top.png'
            }
            alt="TOP"
          />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink to="/work/" className={work ? 'link-current' : ''}>
          <Picture
            srcPC={
              work
                ? '/images/txt_nav_work_active.png'
                : '/images/txt_nav_work.png'
            }
            srcSP={
              work
                ? '/images/txt_nav_work_active.png'
                : '/images/txt_nav_work.png'
            }
            alt="WORK"
          />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink to="/contact/" className={contact ? 'link-current' : ''}>
          <Picture
            srcPC={
              contact
                ? '/images/txt_nav_contact_active.png'
                : '/images/txt_nav_contact.png'
            }
            srcSP={
              contact
                ? '/images/txt_nav_contact_active.png'
                : '/images/txt_nav_contact.png'
            }
            alt="CONTACT"
          />
        </StyledLink>
      </StyledMenuItem>
    </>
  );
};

export default MenuItem;
