import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from './components/Error/Error'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>

    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
