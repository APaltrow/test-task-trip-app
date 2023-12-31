import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store, persistor } from '@redux';

import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
/* TO DO : enable Strict mode after api testing */
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
