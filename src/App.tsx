import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Top from './pages/Top';
import Work from './pages/Work';
import Contact from './pages/Contact';
import MenuItem from './components/MenuItem';

import txtHeadTtl from './images/txt_head_ttl.png';
import txtNavTop from './images/txt_nav_top.png';
import txtNavTopActive from './images/txt_nav_top_active.png';
import txtNavWork from './images/txt_nav_work.png';
import txtNavWorkActive from './images/txt_nav_work_active.png';
import txtNavContact from './images/txt_nav_contact.png';
import txtNavContactActive from './images/txt_nav_contact_active.png';

const App: React.FC = () => {
  return (
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
      <Article>
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Article>
      <Footer>
        © { new Date().getFullYear() } HOSONO KOTARO
      </Footer>
    </Router>
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

const Article = styled.article`
  min-height: calc(100vh - 102px - 53px);
  padding-bottom: 40px;

  @media (min-width: 768px) {
    min-height: calc(100vh - 167px - 53px);
  }
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