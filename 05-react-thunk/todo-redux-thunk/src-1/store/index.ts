import { createStore } from 'redux'
import { reducer as rootReducer } from './reducer'

export const store = createStore(rootReducer)