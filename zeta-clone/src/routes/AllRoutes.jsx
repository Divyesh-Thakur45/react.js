import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/home/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </div>
  )
}

export default AllRoutes