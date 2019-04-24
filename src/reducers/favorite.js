import { SET_FAVORITE } from "../constants"

export const favorite = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favorite: action.data || []
      }
    default:
      return state
  }
}