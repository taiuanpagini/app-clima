import AsyncStorage from '@react-native-community/async-storage';

import {persistReducer} from 'redux-persist';
import forecast from './ducks/forecast';
import modal from './ducks/modal';
import location from './ducks/location';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'forecast',
      storage: AsyncStorage,
      whitelist: [location, forecast, modal],
    },
    reducers,
  );

  return persistedReducer;
};