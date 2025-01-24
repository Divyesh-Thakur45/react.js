import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import PrivatePage from './pages/PrivatePage'

const Allroutes = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<PrivatePage >
                        <About />
                    </PrivatePage>} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </div>
        </div>
    )
}

export default Allroutes