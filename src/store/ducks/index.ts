import {combineReducers} from 'redux';

import location from "./location";
import forecast from "./forecast";

export const rootReducer = combineReducers({
  location,
  forecast
});

export type RootState = ReturnType<typeof rootReducer>;