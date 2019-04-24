import { SET_FAVORITE } from '../constants'

const setFavoriteLocation = (data) => {
  return {
    type: SET_FAVORITE,
    data
  }
}

export const addFavoriteLocations = (data) => {
  return async (dispatch, getState) => {
    dispatch(setFavoriteLocation(data))
  }
}
