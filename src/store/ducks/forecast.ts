import { createActions, createReducer } from 'reduxsauce';
import { DailyWeatherProps } from '~/components/DailyWeather/interface';

export const { Types, Creators } = createActions({
  setForecast: ['data'],
});

const INITIAL_STATE: DailyWeatherProps = {};

const setForecast = (state = INITIAL_STATE, action: any) => ({
  ...action.data
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_FORECAST as any]: setForecast
});
