import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from '../pages/Contact';
import Top from '../pages/Top';
import Work from '../pages/Work';
import { AreaTransition, Article } from './styledRoutingAnimation';
import useRoutingAnimation from './useRoutingAnimation';

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
