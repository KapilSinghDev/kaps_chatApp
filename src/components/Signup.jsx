import React from 'react'

const Signup = () => {
  return (
    <div className='Signupbox'>
      <div className='Signupcont'>
        <span className="signuplogo">Tyott</span>
        <br/>
        <span className='signuptitle'>lets Signup</span><br/>
        <div className='signupfields'>
        <form>
            <input className='boxx' title='First Name' placeholder='enter your first name'/>
            <input className='boxx' title='Last Name' placeholder='enter your last name'/>
            <input className='boxx' title='email' placeholder='enter your email'/>
            <input className='boxx' type = 'number' title='phone no' placeholder='enter your phone no'/>
            <input className = 'boxx' title='pwd' placeholder='set password'/>
            <input className='boxx' title='cnfpwd' placeholder='confirm password'/>
        </form>
        </div>
        <br/>
        <button className='btn'>Sign up</button>
      </div>

    </div>
  )
}

export default Signup
