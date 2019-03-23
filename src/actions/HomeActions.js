import { SET_WEATHER } from '../constants';

import RestClient from '../RestClient';
//import { push } from 'connected-react-router';

const setWeatherData = (data) => {
    return {
        type: SET_WEATHER,
        data
    }
}


export const getWeatherData = () => {
    return async (dispatch, getState) => {
        const resp = await RestClient.request("get", `https://api.darksky.net/forecast/40976224536e6c2de29afb96f78ad94a/50.016748,20.990469?lang=pl&units=auto`);
        const { data } = resp;
        console.log(resp, 'resp')
        console.log(data);
        if (data) {
            console.log("dispatch")
            dispatch(setWeatherData(data));
        } 
    }
}
