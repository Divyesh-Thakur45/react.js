import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../views/Home/Hero.jsx'
import Hero from '../views/home/Home.jsx'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default AllRoutes