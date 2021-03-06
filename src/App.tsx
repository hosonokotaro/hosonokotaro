import React from 'react';
import Helmet from 'react-helmet';

import AppRouter from './AppRouter';
import Picture from './components/Picture';
import txtHeadTtl from './images/txt_head_ttl.png';
import { siteTitle } from './siteSetting';
import { Footer, StyledHeader } from './styledApp';

const App: React.FC = () => {
  const fullYear = () => new Date().getFullYear();

  return (
    <>
      <Helmet>
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
