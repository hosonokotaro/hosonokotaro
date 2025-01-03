import React from 'react';
import Helmet from 'react-helmet';

import Picture from '@/Picture';
import AppRouter from '~/AppRouter';
import { siteTitle } from '~/siteSetting';
import { Copyright, Footer, Header } from '~/styledApp';

const App: React.FC = () => {
  const fullYear = () => new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Header>
        <h1>
          <Picture
            srcPC="/images/txt_head_ttl.png"
            srcSP="/images/txt_head_ttl.png"
            alt={siteTitle}
          />
        </h1>
      </Header>
      <AppRouter />
      <Footer>
        <Copyright>© {fullYear()} HOSONO KOTARO</Copyright>
      </Footer>
    </>
  );
};

export default App;
