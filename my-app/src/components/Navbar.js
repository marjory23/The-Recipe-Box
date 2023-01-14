import React from 'react'

function Navbar({ setPopupRegisterForm, setPopupLoginForm } ) {
  return (
    <div className='navbar'>
      <button onClick={() => setPopupLoginForm(true)}>LOGIN</button>
      <button onClick={() => setPopupRegisterForm(true)}>REGISTER</button>
    </div>
  )
}

export default Navbar