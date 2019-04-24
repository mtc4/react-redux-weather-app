import { SET_WEATHER } from "../constants"

export const home = (state = [], action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.data
      }
    default:
      return state
  }
}