import React from 'react';
import Helmet from 'react-helmet';

import { StyledHeader, Footer } from './styledApp';
import {
  siteTitle,
  siteUrl,
  siteDescription,
  siteTwitterName,
} from './siteSetting';

import AppRouter from './AppRouter';
import Picture from './components/Picture';

import txtHeadTtl from './images/txt_head_ttl.png';
import ogImage from './images/og.png';

const App: React.FC = () => {
  const siteUrlRemoveSlash = siteUrl.endsWith('/')
    ? siteUrl.slice(0, -1)
    : siteUrl;

  const fullYear = () => new Date().getFullYear();

  return (
    <>
      <Helmet>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={'@' + siteTwitterName} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={siteUrlRemoveSlash + ogImage} />
        <meta property="og:description" content={siteDescription} />
        <title>{siteTitle}</title>
      </Helmet>
      <StyledHeader>
        <h1>
          <Picture srcPC={txtHeadTtl} srcSP={txtHeadTtl} alt={siteTitle} />
        </h1>
      </StyledHeader>
      <AppRouter />
      <Footer>© {fullYear()} HOSONO KOTARO</Footer>
    </>
  );
};

export default App;
