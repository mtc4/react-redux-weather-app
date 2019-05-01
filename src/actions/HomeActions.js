import { SET_WEATHER, SET_MODE, SET_LOCATION } from '../constants'

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

export const updateLocation = (data) => {
  return {
    type: SET_LOCATION,
    data: data
  }
}

export const setLocation = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(updateLocation(data))
    } catch (err) {
      console.log('API ERROR')
    }
  }
}

export const getWeatherData = (lat = 50.016748, lng = 20.990469) => {
  return async (dispatch, getState) => {
    try {
      const resp = await RestClient.request("GET", `https://api.darksky.net/forecast/{PRIVATE}/${lat},${lng}?lang=pl&units=si`)
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
