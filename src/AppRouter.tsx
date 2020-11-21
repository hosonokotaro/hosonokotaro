import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuList from './container/MenuList';
import RoutingAnimation from './container/RoutingAnimation';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MenuList />
      <RoutingAnimation />
    </Router>
  );
};

export default AppRouter;
