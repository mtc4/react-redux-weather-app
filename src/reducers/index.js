import { combineReducers } from 'redux'

import { home } from './home'
import { favorite } from './favorite'
import { mode } from './mode'

const rootReducer = combineReducers({
  home,
  favorite,
  mode
})

export default rootReducer