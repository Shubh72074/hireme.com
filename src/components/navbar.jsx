// import logo from './../assets/logo.svg'
import React from 'react'
import './../main.css'
import Logo from './logo'
import { FaBars } from 'react-icons/fa'

export default function navbar() {
  return (
    <div className='nav'>
      <Logo id="logo" width={"large"} height={"large"}/>
      <div className="nav-menu" id='men'>
        <button>Home</button>
        <button>User Login</button>
        <button>Employer Login</button>
      </div>
      <button className="menu-btn">
        <FaBars color='white' size='25px'/>
      </button>
    </div>
  )
}