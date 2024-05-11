// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
  import { EarthoOneProvider } from '@eartho/one-client-react';

import App from './App';

ReactDOM.render(
  <EarthoOneProvider
    clientId="UQxaZCf2mGH06K7GsuNx"
  >
    <App />
  </EarthoOneProvider>,
  document.getElementById('app')
);