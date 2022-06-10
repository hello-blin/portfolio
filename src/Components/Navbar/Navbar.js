import React from 'react'
import './Hamburger.scss'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaMedium } from "@react-icons/all-files/fa/FaMedium";
import { Link } from 'react-router-dom'

//Sidebar import

// import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className='hamburger-menu'>
        <div className='hamburger-menu__icon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='logo-main'>
        <a href="#"><h2>Blin</h2></a>
      </div>
      <div className='socials'>
        <a href={"https://github.com/hello-blin"}><FaGithub size="34" color='#fff' className='fa-facebook social__icon' /></a>
        <a href={"https://instagram.com/blin.js"}><FaInstagram size="34" color='#fff' className='fa-instagram social__icon' /></a>
        <a href={"https://medium.com/@kblin164"}><FaMedium size="34" color='#fff' className='fa-medium social__icon' /></a>
      </div>
    </div >
  )
}

export default Navbar