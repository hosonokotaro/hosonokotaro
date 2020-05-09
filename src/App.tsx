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
import Menu from './components/Menu';
import RouteParam from './components/RouteParam';

import txtHeadTtl from './images/txt_head_ttl.png';
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
        <Header>
          <h1>
            <picture>
              <source srcSet={txtHeadTtl} media="(min-width: 768px)" />
              <source srcSet={txtHeadTtl + ' 2x'} />
              <img
                src={txtHeadTtl}
                alt="WebDeveloper hosonokotaro"
              />
            </picture>
          </h1>
        </Header>
        <Menu />
        <RouteParam />
        <Footer>
          © { new Date().getFullYear() } HOSONO KOTARO
        </Footer>
      </Router>
    </>
  );
};

const Header = styled.header`
  text-align: center;
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