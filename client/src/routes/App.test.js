import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import stores from '../stores';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ReduxProvider store={stores}>
      <App />
    </ReduxProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
