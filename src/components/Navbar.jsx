import React from 'react'
import logo from '../assets/Logo.svg'
const Navbar = () => {
  return (
    <div className='w-[100vw] h-[64px] border-b-[1px] border-[#25262B] justify-center items-center flex'>
        <img src={logo} alt="logo"  width={156.77} height={24}/>
    </div>
  )
}

export default Navbar
