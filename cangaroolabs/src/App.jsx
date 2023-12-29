import React from 'react'
import './App.css'
import Homepage from "./components/Hompage/Hompage"
import Footer from "./components/Footer/Footer"

const App = () => {
    return(
    <div>
        <div><Homepage/></div>
        <div className="section2"><div classname="text1">What we offer</div></div>
        <div className="section3">
            <div classname="text1">Why Us</div>
            </div>
        <div className="section4"><div classname="text1">Project Highlights</div></div>
        <div className="section5"><div classname="text1">Our Team</div></div>
        <Footer/>
    </div>
    
    )
}


export default App