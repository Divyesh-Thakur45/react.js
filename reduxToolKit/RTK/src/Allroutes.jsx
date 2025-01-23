import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'

const Allroutes = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </div>
        </div>
    )
}

export default Allroutes