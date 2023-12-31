import React from 'react'
import "./Homepage.css"
import Header from "../Header/Header"
import ParticleBg from '../ParticleBg'
const Hompage = () => {
  return (
    <div><Header/>
    <div classname="homepage">
    <ParticleBg/>
    <div className="can2"><img src='./images/Group2.png'alt="dfw"/></div>
    <div className="can"><img src='./images/3d-rendering-robotic-dog-removebg 1.png' alt='dfw'/></div>
    </div></div>
  )
}

export default Hompage