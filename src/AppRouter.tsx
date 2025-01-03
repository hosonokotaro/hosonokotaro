import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuList from '@/MenuList';
import RoutingAnimation from '@/RoutingAnimation';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MenuList />
      <RoutingAnimation />
    </Router>
  );
};

export default AppRouter;
