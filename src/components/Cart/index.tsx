import React from 'react'
import { useSelector } from 'react-redux'

import { CartState } from '~/store/cart/types'
import { RootState } from '~/store/index'

const Cart: React.FC = () => {
  const { items } = useSelector<RootState, CartState>((state) => state.cart)

  return (
    <>
      <h2>Carrinho</h2>
      <ul>
        {Object.values(items).map((item) => (
          <li
            key={item.product.id}
          >{`${item.product.name} x${item.quantity}`}</li>
        ))}
      </ul>
    </>
  )
}

export default Cart
