import logo from '../assets/logo.png'
import Avatar from '../assets/avatar.png'

import { IoBasket } from "react-icons/io5";


function Header() {
  return <>
  <header className='w-screen fixed z-50 p-6 px-16'>
    {/* Desktop and Tablet */}
    <div className='hidden md:flex w-full h-full items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img src={logo} className='w-8 object-cover' alt="" />
        <p className='text-headingColor text-xl font-bold'>City</p>
      </div>
      <div className='flex items-center justify-between'>
        <ul className='flex items-center gap-8 '>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
        </ul>
        <div className="relative flex items-center justify-center">
        <IoBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex item-center justify-center absolute -top-1 -right-2">
              <p className='text-xs text-white font-semibold leading-0'>0</p>    
          </div>
        </div>
        <img src={Avatar} alt="User Image" className='w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl ml-8' />
      </div>
      </div>

    {/* Mobile */}
    <div className='flex md:hidden'></div>
  </header>
  </>;
}

export default Header;