import url from "url"
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    // .configure()
    .configure({ host: hostname})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}