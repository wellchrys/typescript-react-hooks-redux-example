import Product from '~/interfaces/api/Product'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export interface CartItem {
  quantity: number
  product: Product
}

export interface CartState {
  items: { [key: string]: CartItem }
}

interface AddItemAction {
  type: typeof ADD_ITEM
  product: Product
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM
  product: Product
}

export type CartActionTypes = AddItemAction | RemoveItemAction
