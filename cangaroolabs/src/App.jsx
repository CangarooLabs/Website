import React from 'react'
import './App.css'
import Homepage from "./components/Hompage/Hompage"
import Footer from "./components/Footer/Footer"

const App = () => {
    return(
    <div>
        <div className='section1'><Homepage/></div>
        <div className="section2"><div classname="text1"> <img src='./images/WhatWeOffer.png' alt='dfw'/>
        <div className="container1">
        <div class="row">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</div></div>
<div className="container2">
<div class="row">
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
    <div class="box">Box 6</div>
</div></div></div></div>
        <div className="section3">
            <div classname="text1"><div classname="text1"> <img src='./images/Why Us.png' alt='dfw'/></div></div>
            </div>
        <div className="section4"><div classname="text1"> <img src='./images/Project Highlights.png' alt='dfw'/></div></div>
        <div className="section5"><div classname="text1"> <img src='./images/Our Team.png' alt='dfw'/>
        <Footer/></div></div>
       
    </div>
    
    )
}


export default App