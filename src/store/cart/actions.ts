import Product from '~/interfaces/api/Product'

import { ADD_ITEM, REMOVE_ITEM, CartActionTypes } from './types'

export function addItem(product: Product): CartActionTypes {
  return {
    type: ADD_ITEM,
    product,
  }
}

export function removeItem(product: Product): CartActionTypes {
  return {
    type: REMOVE_ITEM,
    product,
  }
}
