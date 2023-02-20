import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebook, FaInstagram,FaYoutube} from 'react-icons/fa';

const Navbar = () => {
  return (
    // <Nav>
        <div>
            <ul>
                <li>
                    <NavLink className="navbar-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    // </Nav>
  )
}

export default Navbar