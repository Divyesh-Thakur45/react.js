import React, { useContext } from 'react'
import image from '../Assets/Images/Logo.png'
import { ColorChangeContext, ThemeContext } from '../ContextAPI/ContextAPI';
import { RxCross2 } from "react-icons/rx";

export default function About({HandleClick}) {
  const { themeChange } = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);

  return (
    <section className={`w-[95%] md:w-[68%] flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-3 md:py-16 md:px-20 rounded-xl border-[1px] z-30 ${themeChange ? "bg-white border-gray-300" : "bg-[#191919] border-gray-500"}`}>
      <div className="flex flex-col md:flex-row justify-between m-auto md:gap-10">
        <button className="absolute top-5 right-5 p-2 rounded-full" onClick={HandleClick} style={{ backgroundColor: themeChange ? "#eff4f7" : "black" , color: themeChange ? "black" : "white" }}>
          <RxCross2 />
        </button>
        <div className="w-full md:w-[50%] text-start">
          <h1 className='text-lg md:text-2xl font-semibold uppercase text-center md:text-left mt-4 md:mt-0' style={{ color: colorHandle }}>About Me</h1>
          <p className="mt-2 md:mt-4 tracking-wide text-[15px] md:text-[17px] leading-5 md:leading-6" style={{color: themeChange ? "#646464" : "#c7c7c7"}} >Hi, I am Divyesh Thakur, I can build the front-end portion of websites the part users see and interact with. A dedicated and ambitious Full Stack Developer seeking a role in an organization to utilize his skills and experience to contribute to the success of the organization while continuously developing his knowledge and expertise.  and I can also create websites using web languages such as HTML, CSS, JavaScript and React.JS & Node.JS that allow users to access and interact with the site.</p>
          <div className='flex flex-wrap mt-3 md:mt-5'>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#JavaScript</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#ReactJs</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#Vite</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#ReactRedux</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#Bootstrap</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#TailwindCss</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#html</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#css</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#sass</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#jquery</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#firebase</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#github</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#vercel</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#render</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#Node.JS</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#Express</span>
            <span className={`border-[1px] px-2 py-1 md:px-4 md:pt-1 md:pb-2 rounded-3xl me-2 mb-2 text-[13px] md:text-[16px] ${themeChange ? "border-gray-300" : "border-gray-500"}`} style={{color: themeChange ? "#646464" : "#c7c7c7"}}>#MongoDB</span>
          </div>
        </div>
        <div className="w-[80%] md:w-[50%] flex justify-center order-first md:order-last">
          <div>
            <img src={image} alt={image} className="brightness-110 w-[40%] md:w-full m-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}