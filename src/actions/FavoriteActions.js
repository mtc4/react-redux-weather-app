import { SET_FAVORITE, DEL_FAVORITE } from '../constants'

const setFavoriteLocation = (data = []) => {
  return {
    type: SET_FAVORITE,
    data
  }
}
const removeFavoriteLocation = (data = []) => {
  return {
    type: DEL_FAVORITE,
    data
  }
}
export const addFavoriteLocations = (data) => {
  return async (dispatch, getState) => {
    dispatch(setFavoriteLocation(data))
  }
}
export const deleteFavoriteLocation = (data) => {
  return async (dispatch, getState) => {
    dispatch(removeFavoriteLocation(data))
  }
}
