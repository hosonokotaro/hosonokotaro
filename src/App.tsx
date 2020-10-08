import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components/macro';
import {
  siteTitle,
  siteUrl,
  siteDescription,
  siteTwitterName,
} from './SiteSetting';

import AppRouter from './AppRouter';
import Picture from './components/Picture';

import txtHeadTtl from './images/txt_head_ttl.png';
import ogImage from './images/og.png';

const App: React.FC = () => {
  const siteUrlRemoveSlash = siteUrl.endsWith(
    '/',
  )
    ? siteUrl.slice(0, -1)
    : siteUrl;

  const fullYear = () =>
    new Date().getFullYear();

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={siteUrl}
        />
        <meta
          name="description"
          content={siteDescription}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content={
            '@' + siteTwitterName
          }
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content={siteUrl}
        />
        <meta
          property="og:image"
          content={
            siteUrlRemoveSlash + ogImage
          }
        />
        <meta
          property="og:description"
          content={siteDescription}
        />
        <title>{siteTitle}</title>
      </Helmet>
      <header
        css={`
          text-align: center;
        `}
      >
        <h1>
          <Picture
            srcPC={txtHeadTtl}
            srcSP={txtHeadTtl}
            alt={siteTitle}
          />
        </h1>
      </header>
      <AppRouter />
      <Footer>
        © {fullYear()} HOSONO KOTARO
      </Footer>
    </>
  );
};

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
