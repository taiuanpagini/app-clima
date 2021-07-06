import {combineReducers} from 'redux';

import location from "./location";
import modal from "./modal";
import forecast from "./forecast";

export const rootReducer = combineReducers({
  location,
  forecast,
  modal
});

export type RootState = ReturnType<typeof rootReducer>;