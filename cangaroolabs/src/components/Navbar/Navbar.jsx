import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
        <a href="#home">HOME</a>
        <a href="#blog">BLOG</a>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
        <button classname="login">Login</button>
    </div>
  )
}

export default Navbar