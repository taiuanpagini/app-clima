import React from 'react';
import { convertWeather } from '~/utils/convertWeather';
import { DailyWeatherProps } from './interface';
import IconWind from '~/assets/images/wind';
import IconSea from '~/assets/images/sea';
import IconMoisture from '~/assets/images/moisture';
import IconPressure from '~/assets/images/pressure';
import IconSunrise from '~/assets/images/sunrise';
import IconSunset from '~/assets/images/sunset';

import {
	Container,
	ImageWeather,
	City,
	Forecast,
	Weather,
	MinMax,
	MaxWeather,
	MinWeather,
	SunContainer,
	SunsetRise,
	TextSun,
	ContainerComplement,
	Complement,
	TextComplement,
	TextError,
	BtnRetry,
	IconRefresh,
	TextBtn,
	BtnRetryHome
} from './styles';
import { convertDate } from '../../utils/convertDate';
import IconRetry from '~/assets/images/refresh-white';

const DailyWeather: React.FC<DailyWeatherProps> = (props) => {
	const { icon, city, forecast, weather, max, min, sunrise, sunset, wind, moisture, sea, pressure, retryLocation } = props;

	return (
		<Container>
			{city ?
				<>
					<BtnRetryHome onPress={retryLocation}>
						<IconRetry />
					</BtnRetryHome>

					<ImageWeather source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }} />
					<City>{city}</City>
					<Forecast>{forecast}</Forecast>
					<Weather>{convertWeather(weather)}˚</Weather>
					<MinMax>
						<MaxWeather>Máx: {convertWeather(max)}˚</MaxWeather>
						<MinWeather>Min: {convertWeather(min)}˚</MinWeather>
					</MinMax>

					<SunContainer>
						<SunsetRise>
							<IconSunrise />
							<TextSun>{convertDate(sunrise)}</TextSun>
						</SunsetRise>
						<SunsetRise>
							<IconSunset />
							<TextSun>{convertDate(sunset)}</TextSun>
						</SunsetRise>
					</SunContainer>

					<ContainerComplement>
						<Complement>
							<IconWind />
							<TextComplement>{Math.round(Number(wind))} km/h</TextComplement>
						</Complement>
						<Complement>
							<IconMoisture />
							<TextComplement>{moisture}%</TextComplement>
						</Complement>
						<Complement>
							<IconSea />
							<TextComplement>{sea} nmm</TextComplement>
						</Complement>
						<Complement>
							<IconPressure />
							<TextComplement>{pressure} hPa</TextComplement>
						</Complement>
					</ContainerComplement>
				</>
				:
				<>
					<TextError>Não foi possível identificar sua localização. Acesse as configurações do seu dispositivo e permita a utilização da localização.</TextError>
					<BtnRetry onPress={retryLocation}>
						<IconRefresh />
						<TextBtn>Tentar Novamente</TextBtn>
					</BtnRetry>
				</>
			}
		</Container>
	);
};

export default DailyWeather;