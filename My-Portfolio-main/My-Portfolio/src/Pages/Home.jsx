import React, { useContext, useState } from "react";
import { MatterCanvas } from "../Components/MatterCanvas ";
import { NavLink } from "react-router-dom";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import { ColorChangeContext, ThemeContext } from "../ContextAPI/ContextAPI";
import { IoSettingsOutline } from "react-icons/io5";
import ColorPicker from "../Components/ColorPicker";
import About from "../Components/About";
import { HiDownload } from "react-icons/hi";
import Resume from "../Components/Resume";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false)
  const { themeChange, setThemeChange } = useContext(ThemeContext)
  const { colorHandle, showColorPicker, setShowColorPicker } = useContext(ColorChangeContext);
  const WriteName = {
    words: ['Frontend Developer.', 'Backend Developer.'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
  }
  const [text] = useTypewriter(WriteName)
  const HandleClick = () =>{
    setShowAbout(!showAbout)
    if(showAbout){
      document.body.style.overflowY = "scroll";
    }
    else{
      document.body.style.overflowY = "hidden";
    }
  }
  return (
    <>
    {showAbout && <div className="fixed top-0 bottom-0 left-0 right-0 z-20 h-full w-full bg-black opacity-50" onClick={HandleClick}></div>}
    <div id="Home" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="hidden md:block">
        <MatterCanvas />
      </div>
      <section className="flex flex-col md:flex-row justify-evenly items-center w-full relative top-24 pointer-events-none h-[90vh] md:h-screen">
        <div className="flex flex-row md:flex-col md:w-16 ms-2 gap-4 mt-5 mb-24 md:mb-0 pointer-events-auto md:-translate-y-24 md:order-first order-last">
          <NavLink to={"https://www.linkedin.com/in/divyesh-thakur-a7b1b62b1/"} target="_blank" className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <LuLinkedin />
            </span>
          </NavLink>
          <NavLink to={"https://www.instagram.com/mr._divu__/?hl=en"} target="_blank" className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <FaInstagram />
            </span>
          </NavLink>
          <NavLink to={"https://x.com/_Divyesh_Thakur"} target="_blank" className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <FaXTwitter />
            </span>
          </NavLink>
          <NavLink to={"https://github.com/Divyesh-Thakur45"} target="_blank" className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`}>
            <span>
              <FiGithub />
            </span>
          </NavLink>
        </div>
        <div className="w-[85%] md:w-[71%] md:m-auto flex items-center -translate-y-24">
          <div className="text-start w-full">
            <p className="uppercase tracking-widest text-[12px] md:text-[16px]" style={{ color: themeChange ? "black" : "white" }}>
              Welcome to my Website
            </p>
            <h1 className={`text-2xl md:text-6xl font-bold mt-3 ${themeChange ? "text-black" : "text-white"}`}>Hi, I'm <span style={{ color: colorHandle }}>Divyesh Thakur</span></h1>
            <h1 className="text-2xl md:text-5xl font-medium md:mt-3" style={{ color: themeChange ? "black" : "white" }} >
              I am a {" "}
              <span style={{ color: colorHandle }}>{text}</span>
              <Cursor cursorColor={`${colorHandle}`} cursorBlinking="false" />
            </h1>
            <div className="flex float-start">
              <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} mt-5 md:px-6 py-2 font-semibold rounded-lg text-[16px] md:text-lg pointer-events-auto`} onClick={HandleClick} >About me</button>
              <button className={`BannerIcon flex items-center md:hidden ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} mt-5 md:px-6 py-2 font-semibold rounded-lg text-[16px] md:text-lg ms-6 pointer-events-auto`} ><Resume /><HiDownload className='ms-1' /></button>
            </div>
          </div>
        </div>
        <div className="fixed top-4 md:top-28 right-4 md:right-8 pointer-events-auto -translate-y-none z-10">
          <div className={`cursor-pointer p-3 rounded-full mb-3 md:mb-4 text-xl transform ${showColorPicker ? "translate-x-0" : "-translate-x-60 md:-translate-x-[270px]"} transition-transform duration-300 ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"}`} onClick={() => setShowColorPicker(!showColorPicker)}>
            <IoSettingsOutline className="animate-spinSetting" />
          </div>
          <ColorPicker />
          <div>
            <div className={`cursor-pointer p-3 rounded-full text-xl transform ${showColorPicker ? "translate-x-0" : "-translate-x-60 md:-translate-x-[270px]"} transition-transform duration-300 ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black"}`} onClick={() => setThemeChange(!themeChange)}>
              {themeChange ? <IoMoonOutline className='text-black' /> : <RxSun className='text-white' />}
            </div>
          </div>
        </div>
      </section>
    </div>
    {showAbout && <About HandleClick={HandleClick} />}
    </>
  );
}