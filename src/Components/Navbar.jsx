import React from 'react';

const Navbar = () => {
  return(
    <div className='header'>
      <div className='header-content'>Mountain Project Clone</div>
      <form action='' className='login-form'>
        <div className='username'>
          <label for='username-input'>Enter Username</label>
          <input type='text' name='username-input' id='username-input'></input>
        </div>
        <div className='password'>
          <label for='password-input'>Enter password</label>
          <input type='text' name='password-input' id='password-input'></input>
        </div>
        <button className='login-button'>Login</button>
      </form>
    </div>
  )
}

export default Navbar;