import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Products from '../Components/Products'
import Login from '../Page/Login'
import Description from '../Page/Description'
import PrivatePage from '../Page/PrivatePage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Products' element={
          <PrivatePage>
            <Products />
          </PrivatePage>
        }></Route>
        <Route path='/Description/:id' element={<Description />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
}