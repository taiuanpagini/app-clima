import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import KeyboardManager from 'react-native-keyboard-manager';

import Home from './pages/Home';
import { persistor, store } from './store';

const Index: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setToolbarDoneBarButtonItemText("Ok");
    }
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />

        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
};

export default Index;