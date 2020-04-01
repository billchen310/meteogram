import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

export default class WeatherService{
    static fetchData(base_url, param, value){
        let query_url = base_url.replace(param, value);
        return new Promise((resolve, reject) => {
            trackPromise(
                axios.get(query_url).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            , "whole")
        });
    }
}