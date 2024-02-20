import React, { createContext, useContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)


const getDefaultCart = ()=>{
    let cart = {}
    for(let i = 1; i<PRODUCTS.length + 1; i++){
        cart[i] = 0
    }

    return cart
}
export const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addCart = (itemId) =>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}) )
    }

    const removeCart = (itemId) =>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1}) )
    }
    console.log(cartItems)
    const contextValue = {cartItems, addCart, removeCart}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}