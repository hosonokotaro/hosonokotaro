import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Top from '../pages/Top';
import Work from '../pages/Work';
import Contact from '../pages/Contact';

import useRoutingAnimation from './useRoutingAnimation';
import { Article, AreaTransition } from './styledRoutingAnimation';

const RoutingAnimation: React.FC = () => {
  const location = useLocation();
  const isAnimation = useRoutingAnimation();

  return (
    <Article>
      <TransitionGroup component={null} enter={isAnimation} exit={isAnimation}>
        <CSSTransition key={location.key} classNames="route" timeout={600}>
          <Switch location={location}>
            <Route exact path="/">
              <AreaTransition>
                <Top />
              </AreaTransition>
            </Route>
            <Route path="/work">
              <AreaTransition>
                <Work />
              </AreaTransition>
            </Route>
            <Route path="/contact">
              <AreaTransition>
                <Contact />
              </AreaTransition>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Article>
  );
};

export default RoutingAnimation;
