import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from './components/Error/Error'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './contexto/CartContext'

function App() {

  return (
    <>
    <BrowserRouter>

    <CartProvider>

    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>

    </CartProvider>

    </BrowserRouter>

    </>
  )
}

export default App
