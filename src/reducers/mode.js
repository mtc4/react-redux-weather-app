import { SET_MODE } from "../constants"

export const mode = (state = [], action) => {
  switch (action.type) {
    case SET_MODE:
      return action.data
    default:
      return state
  }
}