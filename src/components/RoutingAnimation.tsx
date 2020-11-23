import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Top from '../pages/Top';
import Work from '../pages/Work';
import Contact from '../pages/Contact';

const RoutingAnimation: React.FC = () => {
  const location = useLocation();
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    window.addEventListener(
      'popstate',
      () => {
        setIsAnimation(false);
      },
      false,
    );
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    const timer = setTimeout(() => {
      setIsAnimation(true);
    }, 600);

    return () => clearTimeout(timer);
  });

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

const Article = styled.article`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  min-height: calc(100vh - 102px - 53px);
  padding-bottom: 40px;

  @media (min-width: 768px) {
    min-height: calc(100vh - 171px - 53px);
  }
`;

const AreaTransition = styled.div`
  position: relative;
  letter-spacing: 0;
  opacity: 1;
  transform-origin: top center;
  transition: all 0.6s ease;

  &.route-enter {
    letter-spacing: 3em;
    opacity: 0;
    filter: blur(16px);
    transform: scale(1.9) rotate(15deg);
    transition-delay: 0.3s;
  }
  &.route-enter-active {
    letter-spacing: 0;
    opacity: 1;
    filter: blur(0);
    transform: scale(1) rotate(0deg);
  }
  &.route-exit-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    letter-spacing: 0;
    opacity: 1;
    filter: blur(0);
    transform: scale(1) rotate(0deg);
    pointer-events: none;
  }
  &.route-exit {
    letter-spacing: 3em;
    opacity: 0;
    filter: blur(16px);
    transform: scale(0.1) rotate(-15deg);
  }
`;

export default RoutingAnimation;
