import produce from 'immer'

import { CartState, CartActionTypes, REMOVE_ITEM, ADD_ITEM } from './types'

const initialState: CartState = {
  items: {},
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes,
): CartState {
  switch (action.type) {
    case ADD_ITEM:
      if (state.items[action.product.id]) {
        return produce(state, (draft) => {
          draft.items[action.product.id].quantity += 1
        })
      } else {
        return produce(state, (draft) => {
          draft.items[action.product.id] = {
            product: action.product,
            quantity: 1,
          }
        })
      }
    case REMOVE_ITEM:
      if (state.items[action.product.id]) {
        return produce(state, (draft) => {
          if (draft.items[action.product.id].quantity === 1) {
            delete draft.items[action.product.id]
          } else {
            draft.items[action.product.id].quantity -= 1
          }
        })
      }
      return state
    default:
      return state
  }
}
