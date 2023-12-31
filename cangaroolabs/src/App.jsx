import React from 'react'
import './App.css'
import Homepage from "./components/Hompage/Hompage"

const App = () => {
    return(
    <div>
        <Homepage/>
        <div><div className="section2"><div classname="text1"> <img src='./images/WhatWeOffer.png' alt='dfw'/>
    <div className="container1">
    <div class="row">
<div class="box"><div className="icons"><img src='./images/artificial-intelligence.png' alt='dfw'/></div><br/><br/><div className="t1">AI Solutions</div></div>
<div class="box"><div className="icons"><img src='./images/ux 2.png' alt='dfw'/></div><br/><br/><div className="t1">UI/UX Design</div></div>
<div class="box"><div className="icons"><img src='./images/mobile 1.png' alt='dfw'/></div><br/><br/><div className="t1">Web Development</div></div>
</div></div>
<div className="container2">
<div class="row">
<div class="box"><div className="icons"><img src='./images/mobile-application 1.png' alt='dfw'/></div><br/><br/><div className="t1">Mobile Solutions</div></div>
<div class="box"><div className="icons"><img src='./images/pen-tool 1.png' alt='dfw'/></div><br/><br/><div className="t1">Graphic Designing</div></div>
<div class="box"><div className="icons2"><img src='./images/cyber-security 1.png' alt='dfw'/></div><br/><br/><div className="t1">Cyber Security Solutions</div></div>
</div></div></div></div></div>
    </div>
    
    )
}


export default App