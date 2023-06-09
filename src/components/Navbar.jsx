import React from 'react'
import cdsimage from './cds.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='navlogo'> Tyott </span>
      <div className='user'>
        <img className = 'chatimg' src={''} alt=''/>
        <span>user name</span>
        <button className='logoutbtn'>log out</button>
      </div>
    </div>
  )
}

export default Navbar
