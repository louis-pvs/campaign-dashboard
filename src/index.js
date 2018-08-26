import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';
import App from './routes/App';
import stores from './stores';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
  html {
    font-size: 16px;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  h1 {
    font-family: Montserrat;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover, &:focus, &:visited {
      color: inherit;
    }
  }
`;

ReactDOM.render(
  <ReduxProvider store={stores}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
registerServiceWorker();
