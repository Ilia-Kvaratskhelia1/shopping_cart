import "./Cart.css"
import React, {useContext} from 'react'
import { ShopContext } from '../../context/Context'
function CartItem(props) {
    const {id, productName, price, productImage} = props.data

    const {cartItems, addCart, removeCart, uptadeCart} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <p>
            <b>{productName}</b>
        </p>
        <p className="price">{price} $</p>
        <div className="countHandler">
            <button onClick={()=> removeCart(id)}>-</button>
            <input type="text" value={cartItems[id]} onChange={(e)=>uptadeCart(Number(e.target.value), id)} />
            <button onClick={()=> addCart(id)}>+</button>
        </div>
    </div>
  )
}

export default CartItem