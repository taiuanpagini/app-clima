import { createActions, createReducer } from 'reduxsauce';
import { LocationProps } from '~/models/location';

export const { Types, Creators } = createActions({
  setLocation: ['data'],
});

const INITIAL_STATE: LocationProps = {};

const setLocation = (state = INITIAL_STATE, action: any) => ({
  ...action.data
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_LOCATION as any]: setLocation
});
