import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hero from '../views/Home/Hero';

const AllRoutes = () => {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  )
}

export default AllRoutes