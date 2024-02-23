import "./Cart.css"
import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/Context';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {cartItems, subTotal } = useContext(ShopContext)
  const TotalPrice = subTotal()
  const navigate = useNavigate()
  return (
    <div className='Cart'>
      
      {PRODUCTS.map((products)=>{
        if(cartItems[products.id] !== 0){
          return <CartItem data={products} />
        }
      })}

      {TotalPrice > 0 ? (<div className="checkout">
      <button onClick={()=> navigate('/shopping_cart/')}>Continue Shopping</button>
      <p>Total {TotalPrice}$</p>
      </div>
) :(<h1>Your Cart is Empty</h1>)}

    </div>
  )
}

export default Cart;