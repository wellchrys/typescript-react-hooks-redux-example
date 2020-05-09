import { combineReducers, createStore } from 'redux'

import { cartReducer } from './cart/reducers'

const rootReducer = combineReducers({
  cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
