import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Menu from './components/Menu';
import RoutingAnimation from './components/RoutingAnimation';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Menu />
      <RoutingAnimation />
    </Router>
  );
};

export default AppRouter;