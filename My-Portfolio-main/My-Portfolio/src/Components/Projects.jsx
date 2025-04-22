import React, { useContext } from "react";
import { ThemeContext } from "../ContextAPI/ContextAPI";
import { ColorChangeContext } from "../ContextAPI/ContextAPI";
import styled from "styled-components";
import { ProjectImages } from '../Constant/index'
import { NavLink } from "react-router-dom";

export default function Projects() {
  const { themeChange } = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  return (
    <section id="Projects" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="w-[90%] md:max-w-[68%] m-auto pb-1 md:py-28 relative">
        <p className="uppercase tracking-widest font-bold text-[14px] md:text-[16px]" style={{ color: colorHandle }}>
          Projects
        </p>
        <ProjectHeading colorhandle={colorHandle} className='pb-5 relative inline-block mt-1 text-3xl md:text-4xl lg:text-5xl font-Montserratt font-[600]' style={{ color: themeChange ? "black" : "white" }}>
          My Projects
        </ProjectHeading>
        <div className="md:mt-10 mb-10 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="hidden md:block h-[2px] absolute left-52 right-1/2 top-1/2 -translate-y-1/2" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.BoatWebsite} alt="" className="md:w-[60%]" />
            </div>
            <div className="md:w-[60%]">
              <NavLink to={"https://boat-website-3bio.vercel.app/"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/Boat-Website"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }} >Boat Website Clone</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>The Boat website clone is a fully responsive and modern e-commerce platform. The clone features an interactive product grid, advanced filtering options, detailed product pages, and a dynamic cart system.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>React JS, Tailwind CSS, HTML 5, CSS 3, Javascript, JSON-Server, Firebase, Firebase Auth, Paypal</h4>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }}>Infinite Scroll Project</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>This project demonstrates an efficient infinite scrolling interface using React and Tailwind CSS. As users scroll down, new items are automatically fetched and displayed, enhancing the overall user experience.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>React JS, Tailwind CSS, HTML 5, CSS 3, Javascript, JSON-Server</h4>
            </div>
          </div>
          <div className="hidden md:block h-[2px] absolute left-1/2 right-52 top-1/2 -translate-y-1/2" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full md:text-right relative order-first md:order-last">
            <div>
              <img src={ProjectImages.infiniteScroll} alt="" className="md:w-[60%] inline-block" />
            </div>
            <div className="md:w-[60%] md:float-end text-center">
              <NavLink to={"https://infinite-scroll-project-bay.vercel.app/"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/Infinite-Scroll-Project"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="hidden md:block h-[2px] absolute left-52 right-1/2 top-1/2 -translate-y-1/2 opacity-70" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.DeathWisCoffeehWebsite} alt="" className="md:w-[60%]" />
            </div>
            <div className="md:w-[60%]">
              <NavLink to={"https://death-wish-coffee-website.vercel.app/"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/Death-Wish-Coffee-Clone"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }} >Death Wish Coffee Website</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>This project is a website inspired by Death Wish Coffee, featuring a dark, bold design that matches the brand's identity. The website is fully responsive, ensuring an optimal viewing experience on both desktop and mobile devices.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>HTML 5, CSS 3, Javascript, Bootstrap, JSON-Server</h4>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }}>Flipkart Clone</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>This project is an e-commerce website inspired by Flipkart. The platform features a responsive and user-friendly interface where Users can create accounts and securely login to Flipkart Website.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>HTML 5, CSS 3, Javascript, JSON-Server, Bootstrap</h4>
            </div>
          </div>
          <div className="hidden md:block h-[2px] absolute left-1/2 right-52 top-1/2 -translate-y-1/2" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full md:text-right relative order-first md:order-last">
            <div>
              <img src={ProjectImages.FlipkartWebsite} alt="" className="md:w-[60%] inline-block" />
            </div>
            <div className="md:w-[60%] md:float-end text-center">
              <NavLink to={"https://flipkart-clone-pi-vert.vercel.app/"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/Flipkart-Clone"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="hidden md:block h-[2px] absolute left-52 right-1/2 top-1/2 -translate-y-1/2" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.Calculator} alt="" className="md:w-[60%]" />
            </div>
            <div className="md:w-[60%]">
              <NavLink to={"https://calculator-seven-beta-34.vercel.app/"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/JS-Projects/tree/main/Calculator"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }} >Calculator</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>This project is a simple and responsive calculator. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>HTML 5, CSS 3, Javascript</h4>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }}>To do List Project</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>This is a responsive and user-friendly to-do list application designed to help users manage tasks efficiently. Users can add, edit, and delete tasks while marking them as completed once done.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>React js, Tailwind CSS, HTML 5, CSS 3, Javascript, JSON-Server</h4>
            </div>
          </div>
          <div className="hidden md:block h-[2px] absolute left-1/2 right-52 top-1/2 -translate-y-1/2" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full md:text-right relative order-first md:order-last">
            <div>
              <img src={ProjectImages.toDoList} alt="" className="md:w-[60%] inline-block" />
            </div>
            <div className="md:w-[60%] md:float-end text-center">
              <NavLink to={"https://to-do-list-project-kohl.vercel.app/?order=null&filterCategory="} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/React-JS-Projects/tree/main/to-do-list-project"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-1 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 relative">
          <div className="hidden md:block h-[2px] absolute left-52 right-1/2 top-1/2 -translate-y-1/2" style={{ backgroundColor: colorHandle }}></div>
          <div className="hidden md:block h-4 w-4 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px]" style={{ backgroundColor: `${themeChange ? "#ecf0f3" : "#111111"}`, borderColor: colorHandle }}></div>
          <div className="w-full relative">
            <div>
              <img src={ProjectImages.HighTechWebsite} alt="" className="md:w-[60%]" />
            </div>
            <div className="md:w-[60%]">
              <NavLink to={"https://as-hightech.000webhostapp.com/"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Live</button>
              </NavLink>
              <NavLink to={"https://github.com/Ashiiish3/AS-Websites/tree/main/HighTech%20Website%20Template"} target="_blank">
                <button className={`BannerIcon button ${themeChange ? "shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} w-20 py-1 font-semibold rounded-lg text-[15px] md:text-md mx-2`} >Github</button>
              </NavLink>
            </div>
          </div>
          <div className="w-full text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-0 md:mb-2" style={{ color: themeChange ? "black" : "white" }} >HighTech Website Clone</h1>
              <p className="text-[16px] md:text-[17px] mb-2" style={{ color: themeChange ? "black" : "white" }}>This project is a clone of HighTech Website that emphasizes the use of advanced technologies and modern design. This term is often associated with sectors that focus on technological innovation, including electronics, computers, and various scientific fields.</p>
              <h4 className="tracking-widest text-[16px] md:text-[17px]" style={{ color: colorHandle }}>HTML 5, CSS 3, Javascript, Bootstrap, JQuery</h4>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[2px] w-52 m-auto opacity-70" style={{ backgroundColor: colorHandle }}></div>
        <div className="hidden md:block w-[2px] absolute top-52 bottom-0 left-1/2 -translate-x-1/2 opacity-70" style={{ backgroundColor: colorHandle }}></div>
      </div>
    </section>
  );
}

const ProjectHeading = styled.div`
&::after{
  background-color: ${({ colorhandle }) => colorhandle};
  content: '';
  height: 3px;
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0%;
  margin: auto;
  opacity: 0.7;
}
    @media (max-width: 768px) {
    &::after {
     display: none
    }
  }
`