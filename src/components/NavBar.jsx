import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./NavBar.css"
function NavBar() {
  return (
    <div className='navBar'>
        <div className="link">
            <Link to={"/shopping_cart/"}>Shop</Link>
            <Link to={"/shopping_cart/cart"}>
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default NavBar