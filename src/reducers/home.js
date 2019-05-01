import { SET_WEATHER, SET_LOCATION } from "../constants"

export const home = (state = [], action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.data
      }
    case SET_LOCATION:
      return {
        ...state,
        location: action.data
      }
    default:
      return state
  }
}