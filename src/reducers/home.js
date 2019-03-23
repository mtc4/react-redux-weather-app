import { SET_WEATHER } from "../constants";

export const home = (state = [], action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}