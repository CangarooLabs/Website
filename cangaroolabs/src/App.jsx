import React from 'react'
import './App.css'
import Homepage from "./components/Hompage/Hompage"
import Footer from "./components/Footer/Footer"

const App = () => {
    return(
    <div>
        <div className='section1'><Homepage/></div>
        <div className="section2"><div classname="text1"> <img src='./images/WhatWeOffer.png' alt='dfw'/></div></div>
        <div className="section3">
            <div classname="text1"><div classname="text1"> <img src='./images/Why Us.png' alt='dfw'/></div></div>
            </div>
        <div className="section4"><div classname="text1"> <img src='./images/Project Highlights.png' alt='dfw'/></div></div>
        <div className="section5"><div classname="text1"> <img src='./images/Our Team.png' alt='dfw'/></div></div>
        <Footer/>
    </div>
    
    )
}


export default App