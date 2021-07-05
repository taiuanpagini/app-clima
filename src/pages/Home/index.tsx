import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import '~/config/ReactotronConfig';

import ForecastService from '~/services/forecast.service';
import DailyWeather from '~/components/DailyWeather';

import { Container } from './styles';

import { DailyWeatherProps } from '~/components/DailyWeather/interface';
import LocationService from '~/services/location.service';
import { RootState } from '~/store/ducks';

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const forecast: DailyWeatherProps = useSelector((state: RootState) => state.forecast);
	const [loading, setLoading] = useState(true);
	const [updateForecast, setUpdateForecast] = useState(false);
	const _forecastService = new ForecastService();
	const _locationService = new LocationService();

	useEffect(() => {
		(async () => {
			const locationCurrent = await _locationService.getCurrentLocation();

			console.tron.log(locationCurrent);
			if (!locationCurrent) {
				setLoading(false);
				dispatch({ type: 'SET_LOCATION', data: null });
				dispatch({ type: 'SET_FORECAST', data: null });
			} else {
				dispatch({ type: 'SET_LOCATION', data: locationCurrent });

				const { latitude, longitude } = locationCurrent;
				await _forecastService.getDataWeather(latitude, longitude, dispatch);

				setLoading(false);
			}
		})();
	}, [updateForecast]);

	const retryLocation = async () => {
		setLoading(true);
		setUpdateForecast(!updateForecast);
	};

	return (
		<Container>
			{
				loading ?
					<ActivityIndicator color="#fff" />
					:
					<>
						<DailyWeather {...forecast} retryLocation={retryLocation} />
					</>
			}
		</Container>
	);
};

export default Home;