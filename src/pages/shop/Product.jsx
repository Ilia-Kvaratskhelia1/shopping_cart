import React, { useContext } from 'react'
import "./Shop.css"
import { ShopContext } from '../../context/Context'
function Product(props) {
    const {id, productName, price, productImage} = props.data

    const {cartItems, addCart, removeCart} = useContext(ShopContext)

    const cartiAitemsAmount = cartItems[id]
  return (
    <div className='product'>
<div className="productCard">

<img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>{price}</p>
            <button className='addToCartBttn' onClick={()=> addCart(id)}>Add To Cart {cartiAitemsAmount > 0 && <>({cartiAitemsAmount})</>}</button>
        </div>
</div>
    </div>
  )
}

export default Product