import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Tyott</span>
        <span className="titleLogin">Login</span>
        <form >
          <div className='fields'>
          <input className= 'boxx'required type="text" placeholder="user name" /><br/>
          <input className = 'boxx'required type="email" placeholder="email" /><br/>
          <input className = 'boxx' required type="password" placeholder="password" /><br/>
          <input className = 'boxx' required style={{ display: "none" }} type="file" id="file" />
          <button className='btn'>Login</button>
          </div>
        </form>
        <p className='pp'>
          You do have an account?<br/>
          <button className='btn'>Sign up</button>
        </p>
      </div>
    </div>
  );
}

export default Register
