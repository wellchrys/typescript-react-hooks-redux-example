import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import IProduct from '~/interfaces/api/Product'
import { addItem, removeItem } from '~/store/cart/actions'
import { CartState } from '~/store/cart/types'
import { RootState } from '~/store/index'

interface ProductProps {
  product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState<number>(0)

  const { items } = useSelector<RootState, CartState>((store) => store.cart)

  const add = useCallback(() => dispatch(addItem(product)), [dispatch, product])

  const remove = useCallback(() => dispatch(removeItem(product)), [
    dispatch,
    product,
  ])

  useEffect(() => {
    setQuantity(items[product.id]?.quantity ?? 0)
  }, [items, product.id])

  return (
    <div className="product">
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <button onClick={remove} disabled={!quantity}>
        -
      </button>
      {quantity}
      <button onClick={add}>+</button>
    </div>
  )
}

export default Product
