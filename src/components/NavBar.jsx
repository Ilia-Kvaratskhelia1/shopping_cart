import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./NavBar.css"
function NavBar() {
  return (
    <div className='navBar'>
        <div className="link">
            <Link to={"/"}>Shop</Link>
            <Link to={"/cart"}>
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default NavBar