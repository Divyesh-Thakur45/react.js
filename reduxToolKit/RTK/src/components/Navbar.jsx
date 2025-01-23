import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-evenly bg-gray-800 p-4 shadow-lg">
                <NavLink
                    to="/"
                    className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/About"
                    className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
                >
                    About
                </NavLink>
                <NavLink
                    to="/signin"
                    className="text-white font-medium hover:text-gray-400 transition-colors duration-300"
                >
                    signin
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar