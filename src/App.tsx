import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  siteTitle,
  siteUrl,
  siteDescription,
  siteTwitterSite,
} from './components/SiteSetting';
import MenuItem from './components/MenuItem';
import RouteParam from './RouteParam';

import txtHeadTtl from './images/txt_head_ttl.png';
import txtNavTop from './images/txt_nav_top.png';
import txtNavTopActive from './images/txt_nav_top_active.png';
import txtNavWork from './images/txt_nav_work.png';
import txtNavWorkActive from './images/txt_nav_work_active.png';
import txtNavContact from './images/txt_nav_contact.png';
import txtNavContactActive from './images/txt_nav_contact_active.png';
import ogImage from './images/og.png';

const App: React.FC = () => {
  const siteUrlRemoveSlash = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteTwitterSite} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={siteUrlRemoveSlash + ogImage} />
        <meta property="og:description" content={siteDescription} />
        <title>{siteTitle}</title>
      </Helmet>
      <Router>
        <header>
          <Title>
            <picture>
              <source srcSet={txtHeadTtl} media="(min-width: 768px)" />
              <source srcSet={txtHeadTtl + ' 2x'} />
              <img
                src={txtHeadTtl}
                alt="WebDeveloper hosonokotaro"
              />
            </picture>
          </Title>
        </header>
        <Menu>
          <MenuList>
            <MenuItem
              active={true}
              to="/"
              imagePath={txtNavTop}
              currentImagePath={txtNavTopActive}
              label="Top"
            />
            <MenuItem
              active={false}
              to="/work/"
              imagePath={txtNavWork}
              currentImagePath={txtNavWorkActive}
              label="Work"
            />
            <MenuItem
              active={false}
              to="/contact/"
              imagePath={txtNavContact}
              currentImagePath={txtNavContactActive}
              label="Contact"
            />
          </MenuList>
        </Menu>
        <RouteParam />
        <Footer>
          © { new Date().getFullYear() } HOSONO KOTARO
        </Footer>
      </Router>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

const Menu = styled.nav`
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

const Footer = styled.footer`
  padding: 20px 0;
  line-height: 1;
  text-align: center;
  border-top: 1px solid #333;
  font-size: 1.2rem;
  color: #000;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default App;