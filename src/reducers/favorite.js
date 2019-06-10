import { SET_FAVORITE, DEL_FAVORITE } from "../constants"

export const favorite = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITE:
      console.log(action.data)
      return {
        ...state,
        favorite: [...state.favorite || [], action.data[0]]
      }
    case DEL_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite.filter(item => item.city !== action.data.city)]
      }
    default:
      return state
  }
}