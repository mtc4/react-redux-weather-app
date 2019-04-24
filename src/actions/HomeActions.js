import { SET_WEATHER, SET_MODE } from '../constants'

import RestClient from '../RestClient'
// import { push } from 'connected-react-router';

const setWeatherData = (data) => {
  return {
    type: SET_WEATHER,
    data
  }
}

export const setMode = (data) => {
  return {
    type: SET_MODE,
    data: data
  }
}

export const getWeatherData = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await RestClient.request("GET", `https://api.darksky.net/forecast/-/50.016748,20.990469?lang=pl&units=si`)
      const { data } = resp
      if (data) {
        console.log('mam dane')
        dispatch(setWeatherData(data))
      }
    } catch (err) {
      console.log('API ERROR')
      dispatch(setWeatherData([]))
    }
  }
}
