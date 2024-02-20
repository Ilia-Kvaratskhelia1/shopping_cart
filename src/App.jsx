import { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ShopContextProvider } from './context/Context'
import NavBar from './components/NavBar'
import Shoping from "./pages/shop/Shoping"
import Cart from "./pages/cart/Cart"
function App() {

  return(<>
  
    <ShopContextProvider>
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Shoping/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </Router>
    </ShopContextProvider>
  </>)
}

export default App
