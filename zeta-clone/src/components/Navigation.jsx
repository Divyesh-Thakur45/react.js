import React, { useEffect, useState } from 'react';
import logo from "../assets/images/zeta-logo.svg";
import { CiSearch } from "react-icons/ci";
import "./nav.css";
import Headroom from 'react-headroom';
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navigation = () => {
    const [navigate, setnavigate] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                document.querySelector('.main-nav').classList.add('scroll-nav');
            } else {
                document.querySelector('.main-nav').classList.remove('scroll-nav');
            }
        });
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                document.querySelector('.sub-nav-child').classList.add('scroll-sub-nav');
            } else {
                document.querySelector('.sub-nav-child').classList.remove('scroll-sub-nav');
            }
        });
    }, [])
    // const [show, setShow] = useState(true);

    return (
        <>
            {/* // For Big Screen */}
            <div className="main-nav-for-big">
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
                        <div className='main-nav'>
                            <div className="nav-parent">
                                <nav className='nav'>
                                    <div className='Logo'>
                                        <img src={logo} width="138" height="122" alt="ZETA" className='' />
                                    </div>
                                    <ul className='sub-nav'>
                                        <li><a href="">SERVICES</a></li>
                                        <li><a href="">SOLUTIONS</a></li>
                                        <li><a href="">PRODUCTS</a></li>
                                        <li><a href="">INNOVATION</a></li>
                                        <li><a href="">COMPANY</a></li>
                                        <li><a href="">JOBS</a></li>
                                        <li><a href=""><CiSearch className='search-icone' /></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // for Small screen */}
            <div className='phone-nav'>
                <div className="sub-phone-nav">
                    <div>
                        <img src={logo} width="138" height="122" alt="ZETA" className='Small-logo' />
                    </div>
                    <div className='icones-for-tab' onClick={() => setnavigate(!navigate)} >
                        {navigate ? <IoClose className="close" /> :
                            <HiOutlineMenuAlt1 className="close" />}
                    </div>
                </div>
                <div className='toggle' style={{ display: navigate ? "block" : "none" }}>
                    <div className="small-nav-titles">
                        <ul className='sub-small-nav-titles'>
                            <li className='small-nav-li-first'>
                                <a href="">DE</a>
                                <a href=""><span className='EN'>EN</span></a>
                            </li>
                            <li className='small-nav-li'><a href="">SERVICES</a></li>
                            <li className='small-nav-li'><a href="">SOLITIONS</a></li>
                            <li className='small-nav-li'><a href="">PRODUCTS</a></li>
                            <li className='small-nav-li'><a href="">INNOVATION</a></li>
                            <li className='small-nav-li'><a href="">COMPANY</a></li>
                            <li className='small-nav-li'><a href="">JOBS</a></li>
                            <li className='small-nav-li'><a href="">newsrooms</a></li>
                        </ul>

                    </div>
                    <div className='search-content'>
                        <div className='search-image'>
                            <svg class="mobile" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="282" viewBox="0 0 375 282"><defs><clipPath id="a"><rect width="375" height="282" transform="translate(4417 2345)" fill="#fff" stroke="#707070" stroke-width="1"></rect></clipPath></defs><g transform="translate(-4417 -2345)" clip-path="url(#a)"><path d="M737.148,0C1144.264,0,1474.3,330.033,1474.3,737.148S1144.264,1474.3,737.148,1474.3,0,1144.264,0,737.148,330.033,0,737.148,0Z" transform="translate(3701.352 2345.352)" fill="#7eabd5"></path></g></svg>
                        </div>
                        <p>easy search</p>
                        <input type="text" placeholder='Your Search terms' name="" id="" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navigation;