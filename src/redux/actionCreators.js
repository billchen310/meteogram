import * as constants from './constants';
import WeatherService from '../services/WeatherService';

export const updateWeatherData = (data, error) => ({
    type: constants.UPDATE_DATA,
    forecasts: data,
    err: error
});

export const setLocation = (location) => ({
    type: constants.SET_LOCATION,
    value: location
});

export const getWeatherData = (location_code) => {
    return (dispatch) => {
        WeatherService.fetchData(constants.CORS_API_URL + constants.BASE_URL, constants.LOCATION_PARAM, location_code).then((data) => {
            if (data.countries && data.countries.length === 1){
                console.log(data);
                dispatch(updateWeatherData(data.countries[0].locations[0].part_day_forecasts.forecasts, ''));
            } else {
                dispatch(updateWeatherData(null, 'Failed to fetch weather data'))
            }
        }).catch((err) => {
            dispatch(updateWeatherData(null, err.toJSON().message));
        });
    };
}