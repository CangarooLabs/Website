import React from 'react'
import './Header.css'
import { Navigate } from 'react-router-dom'


const Header = () => {

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth h-container">
        {/* <img src='./03.png' alt='dfw'  width={20}/> */}
        <img src='./CANGAROO.png' alt='dfw' className="logo"width={100}/>
        <div className="flexCenter h-menu">
            <a >Home</a>
            <a href="">Blogs</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact us</a>

            <button type="button" className='button' onClick={Navigate}> 
                <a>Login</a>
            </button>
        </div>
      </div> 
    </section>
  )
}

export default Header