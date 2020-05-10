import React, {
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Menu from './components/Menu';
import RoutingAnimation from './components/RoutingAnimation';

const AppRouter: React.FC = () => {
  const [isAnimation, setIsAnimation] = useState(true);

  const click = () => {
    setIsAnimation(true);
  };

  useEffect(() => {
    const disableAnimation = setTimeout(() => {
      setIsAnimation(false);
    }, 2000);

    return () => clearTimeout(disableAnimation);
  }, [isAnimation]);

  return (
    <Router>
      <Menu onClick={click} />
      <RoutingAnimation isAnimation={isAnimation} />
    </Router>
  );
};

export default AppRouter;