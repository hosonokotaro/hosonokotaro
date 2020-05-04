import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  SwitchTransition,
  CSSTransition,
} from 'react-transition-group';
import styled from 'styled-components';

import Top from './pages/Top';
import Work from './pages/Work';
import Contact from './pages/Contact';

const RouteParam = () => {
  const location = useLocation();

  return (
    <Article>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.key}
          classNames="route"
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path="/">
              <Transition>
                <Top />
              </Transition>
            </Route>
            <Route path="/work">
              <Transition>
                <Work />
              </Transition>
            </Route>
            <Route path="/contact">
              <Transition>
                <Contact />
              </Transition>
            </Route>
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </Article>
  );
};

const Article = styled.article`
  overflow: hidden;
  max-width: 100%;
  min-height: calc(100vh - 102px - 53px);
  padding-bottom: 40px;

  @media (min-width: 768px) {
    min-height: calc(100vh - 167px - 53px);
  }
`;

const Transition = styled.div`
  letter-spacing: 0;
  opacity: 1;
  transform-origin: top center;
  transition: all 0.3s ease;

  &.route-enter {
    letter-spacing: 3em;
    opacity: 0;
    filter: blur(16px);
    transform: scale(1.9) rotate(15deg);
  }
  &.route-enter-active {
    letter-spacing: 0;
    opacity: 1;
    filter: blur(0);
    transform: scale(1) rotate(0deg);
  }
  &.route-exit-active {
    letter-spacing: 3em;
    opacity: 0;
    filter: blur(16px);
    transform: scale(0.1) rotate(-15deg);
  }
`;

export default RouteParam;