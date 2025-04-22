import React, { useContext } from 'react'
import logo from '../Assets/Images/A_logo.png'
import { ThemeContext } from '../ContextAPI/ContextAPI';

export default function Footer() {
  const { themeChange } = useContext(ThemeContext);
  return (
    <div className={`w-full flex justify-center items-center pt-6 md:pt-0 pb-3 md:pb-5 ${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="text-center">
        <h1 className="text-lg md:text-xl mb-2" style={{ color: themeChange ? "black" : "white" }}>Divyesh Thakur</h1>
        <img src={logo} alt="Ashish Sharma logo" className="w-8 md:w-16 m-auto mb-2" />
        <p className="text-sm md:text-base" style={{ color: themeChange ? "black" : "white" }}>Divyesh Thakur &copy; 2025</p>
      </div>
    </div>
  )
}