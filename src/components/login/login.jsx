import React from 'react'
import "./login.css"
import LoginForm from './loginform'

const login = () => {
  return (
    <div>
        <div className="section1">Login now to<br/>Cangaroo Labs<br/><hr width="2px"></hr><br/>Empowering Your Digital Future.</div>
        <div className="Loginform"><LoginForm/></div>
        <div className="section2">Dulitha</div>
    </div>
  )
}

export default login