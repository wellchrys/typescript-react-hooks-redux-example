import { combineReducers } from 'redux'

import { cartReducer } from './cart/reducers'
import { CartState } from './cart/types'

// Interface for the reducer state.
export interface RootState {
  cart: CartState
}

// Combine application reducers.
const rootReducer = combineReducers<RootState>({
  cart: cartReducer,
})

// Export the root reducer.
export default rootReducer
