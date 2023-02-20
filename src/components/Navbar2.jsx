import React from 'react'
import {FaFacebook, FaInstagram,FaYoutube} from 'react-icons/fa';

import '../components/StyleNavbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

export const Navbar2 = () => {
  return (
    <>
        <nav className='main-nav'>
            <div className='logo'> 
                <img src={logo} alt="" width={250} height={80}/>
            </div>

            <div className='menu-list'>
                <ul>
                    <li ><NavLink className="navbar-link" to="/">Home</NavLink></li>
                    <li><NavLink className="navbar-link" to="/products">Products</NavLink></li>
                    <li><NavLink className="navbar-link" to="/contact">Contact</NavLink></li>
                    <li><NavLink className="navbar-link" to="/about">About</NavLink></li>
                    <button className='login-btn'>Login</button>
                </ul>
            </div>

            <div className='social-media'>
                <ul className='social-media-icons'>
                    <li className='fb'> <FaFacebook /> </li>
                    <li className='insta'> <FaInstagram /> </li>
                    <li className='yt'> <FaYoutube /> </li>
                </ul>
                </div>            

        </nav>
    </>
  )
}
