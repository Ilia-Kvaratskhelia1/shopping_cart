import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import "./Shop.css"
function Shop() {
  return (
    <div className='shopping'>
      
      <div className='shoppingTitle'>
        <h1>Ilia Shopping</h1>
      </div>
      <div className="products">
      {PRODUCTS.map((products)=>
         <Product data={products}/>
      )}
      </div>
    </div>
  )
}

export default Shop