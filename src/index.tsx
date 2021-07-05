import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './pages/Home';
import { persistor, store } from './store';

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default Index;