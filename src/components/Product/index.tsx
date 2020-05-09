import React from 'react'

import IProduct from '~/interfaces/api/Product'

interface ProductProps {
  product: IProduct
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <div className="product">
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <button>-</button>1<button>+</button>
  </div>
)

export default Product
