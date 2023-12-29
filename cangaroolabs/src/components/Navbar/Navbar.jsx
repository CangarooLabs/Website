import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="cangaroo">CANGAROO</div>
        <div className="nav"><a href="#home">HOME</a>
        <a href="#blog">BLOG</a>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
        <button classname="login">Login</button>
        </div>
    </div>
  )
}

export default Navbar