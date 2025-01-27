import React from 'react'
import logo from "../assets/images/zeta-logo.svg"
import { CiSearch } from "react-icons/ci";
import "./nav.css"

const Navigation = () => {
    return (
        <div className='navigation-main'>
            <div className='navigation'>
                <div className='sub-nav-child'>
                    <div className='nav-child'>
                        <span className='Contact'>Contact</span>
                        <span className='Newsroom'>Newsroom</span>
                    </div>
                    <div className='nav-child-2'>
                        <span className='DE'>DE</span>
                        <span className='EN'>EN</span>
                    </div>
                </div>
                <nav className='nav'>
                    <div>
                        <img src={logo} width="138" height="122" alt="ZETA" className='logo' />

                    </div>
                    <div className='main-sub-nav'>
                        <ul className='sub-nav'>
                            <li><a href="">SERVICES<span className='anim'></span></a></li>
                            <li><a href="">SOLUTIONS<span className='anim'></span></a></li>
                            <li><a href="">PRODUCTS<span className='anim'></span></a></li>
                            <li><a href="">INNOVATION<span className='anim'></span></a></li>
                            <li><a href="">COMPANY<span className='anim'></span></a></li>
                            <li><a href="">JOBS<span className='anim'></span></a></li>
                            <div className=''><CiSearch className='search-icone' /></div>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation