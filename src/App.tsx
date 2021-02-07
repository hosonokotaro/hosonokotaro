import './App.css';

import React from 'react';
import { hot } from 'react-hot-loader/root';

import Message from './components/Message';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, App.</h1>

      <Message text="メッセージをprops で渡す" />
    </div>
  );
};

export default hot(App);
