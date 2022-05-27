import React from 'react'
import './Hamburger.scss'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaMedium } from "@react-icons/all-files/fa/FaMedium";
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
        <FaGithub size="34" color='#0700ff' className='fa-facebook social__icon' />
        <FaInstagram size="34" color='#0700ff' className='fa-instagram social__icon' />
        <FaMedium size="34" color='#0700ff' className='fa-medium social__icon' />
      </div>
    </div>
  )
}

export default Navbar