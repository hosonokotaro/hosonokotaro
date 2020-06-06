import React from 'react';
import {
  hydrate,
  render,
} from 'react-dom';
import App from './App';
import 'normalize.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Index: React.FC = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById(
  'root',
);

if (rootElement?.hasChildNodes()) {
  hydrate(<Index />, rootElement);
} else {
  render(<Index />, rootElement);
}

serviceWorker.unregister();
