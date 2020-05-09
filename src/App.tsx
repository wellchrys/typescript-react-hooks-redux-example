import React from 'react'

import Cart from '~/components/Cart'
import Product from '~/components/Product'
import products from '~/samples/products.json'

const App: React.FC = () => (
  <>
    <Cart />
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </>
)

export default App
