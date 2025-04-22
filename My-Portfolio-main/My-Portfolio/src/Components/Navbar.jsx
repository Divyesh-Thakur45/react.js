import React, { useContext } from 'react'
import logo from '../Assets/Images/A_logo.png'
import { Link } from 'react-scroll'
import { ColorChangeContext, ThemeContext } from '../ContextAPI/ContextAPI';
import styled from 'styled-components';
import Resume from './Resume';
import { HiDownload } from "react-icons/hi";

export default function Navbar() {
  const {themeChange} = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  return (
    <div className={`md:fixed w-full backdrop-blur-md flex top-0 z-20 md:px-12 h-24 border-opacity-100 ${themeChange ? "bg-[#ecf0f3] border-b-gray-300" : "bg-[#111111] border-b-gray-500"} md:border-b-[1px]`} >
      <div className='max-w-[72%] w-full flex justify-between items-center ms-5 md:m-auto'>
        <div className=' flex justify-between items-center'>
          <div>
            <img src={logo} alt={logo} height={65} width={65} />
          </div>
        </div>
        <div className='justify-between items-center gap-12 hidden md:flex'>
          <ul className={`flex justify-between gap-14 uppercase ${themeChange ? "text-black": "text-white"} font-semibold`}>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Home" spy={true} smooth={true} offset={0} duration={500} >Home</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Skills" spy={true} smooth={true} offset={0} duration={500} >Skills</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Projects" spy={true} smooth={true} offset={0} duration={500} >Projects</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="GithubStatus" spy={true} smooth={true} offset={0} duration={500} >Github Status</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><Link activeStyle={{color:colorHandle}} to="Contact" spy={true} smooth={true} offset={0} duration={500} >Contacts</Link></NavItem>
              <NavItem colorhandle={colorHandle} className="cursor-pointer"><span className='flex items-center' ><Resume /><HiDownload className='ms-1' /></span></NavItem>
          </ul>
        </div>
      </div>
    </div>
  )
}
const NavItem = styled.div`
&:hover {
    color: ${({colorhandle})=> colorhandle };
`;