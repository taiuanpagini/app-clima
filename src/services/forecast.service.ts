import api from "./api"
import Toast from 'react-native-toast-message';

export default class ForecastService {
    
    public async getWeatherLatLon(lat: number, lon: number, dispatch: any) {
        try {
            const weatherDaily = await api.get(`weather?lat=${lat}&lon=${lon}&appid=8f1c51350de4a019754ac2710cd0bb03&lang=pt_br&units=metric`);
    
            const { main, name, weather, sys, wind } = weatherDaily.data;
    
            const obj = {
                icon: weather[0].icon,
                city: name,
                forecast: weather[0].description,
                weather: main.temp,
                max: main.temp_max,
                min: main.temp_min,
                sunrise: sys.sunrise,
                sunset: sys.sunset,
                wind: wind.speed,
                moisture: main.humidity,
                sea: main.sea_level || 0,
                pressure: main.pressure
            }
    
            dispatch({ type: 'SET_FORECAST', data: obj });
        } catch(err) {
            console.tron.log(err)
        }
    }

    public async getWeatherCity(city: string, dispatch: any, setLoading: any) {
        try {
            const weatherDaily = await api.get(`weather?q=${city}&appid=8f1c51350de4a019754ac2710cd0bb03&lang=pt_br&units=metric`);
    
            const { main, name, weather, sys, wind } = weatherDaily.data;
    
            const obj = {
                icon: weather[0].icon,
                city: name,
                forecast: weather[0].description,
                weather: main.temp,
                max: main.temp_max,
                min: main.temp_min,
                sunrise: sys.sunrise,
                sunset: sys.sunset,
                wind: wind.speed,
                moisture: main.humidity,
                sea: main.sea_level || 0,
                pressure: main.pressure
            }
    
            dispatch({ type: 'SET_FORECAST', data: obj });
            setLoading(false);
        } catch(err) {
            setLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Atenção',
                text2: 'Não encontramos a cidade pesquisada',
                topOffset: 70
              });
        }
    }
}