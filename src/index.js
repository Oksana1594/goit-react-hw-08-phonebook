import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthProvider from 'components/AuthProvider/AuthProvider';

import App from 'App';

import { store, persistor } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// basename="/goit-react-hw-08-phonebook"
