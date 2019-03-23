import { SET_WEATHER } from '../constants';

//import RestClient from '../RestClient';
//import { push } from 'connected-react-router';

const setWeatherData = (data) => {
    return {
        type: SET_WEATHER,
        data
    }
}


export const getWeatherData = (type, id) => {
    return async (dispatch, getState) => {
        //const resp = await RestClient.request("get", `/comments/${type}/${id}/list`);
        const data = 'data';
        console.log(data);
        if (data) {
            console.log("dispatch")
            dispatch(setWeatherData(data));
        } 
    }
}
