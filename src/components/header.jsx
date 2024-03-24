import logo from '../assets/logo.png'
import Avatar from '../assets/avatar.png'

import { IoBasket, IoLogOut } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../../firebase.config'
import { userActions } from '../store/userSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function Header() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const dispatch = useDispatch();
  
  const userDetails = useSelector((store) => store)
  
  // to authenticate
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const login = async() => {
    
    if(!userDetails.user){
      const { user } = await signInWithPopup(firebaseAuth, provider);
      const { refreshToken, providerData } = user;
      dispatch(userActions.storeUser(providerData[0]));
    }else{
      setToggleLogin(!toggleLogin)
    }
    
  }

  console.log(toggleLogin)
  
  
  const handleLogOut = () => {
   dispatch(userActions.logOutUser()); 
  }
  return <>
  <header className='w-screen fixed z-50 p-6 px-16'>
    {/* Desktop and Tablet */}
    <div className='hidden md:flex w-full h-full items-center justify-between'>
      <div className='flex items-center gap-2'>
      <Link to="/">
        <img src={logo} className='w-8 object-cover' alt="" />
        <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
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
        
        <div className='relative'>
          <motion.img
          whileTap={{scale:(0.6)}} 
          onClick={login}
          src={ userDetails.user ? userDetails.user.photoURL : Avatar } alt="User Image" className='w-10 min-w-[40px] min-h-[40px] cursor-pointer rounded-3xl drop-shadow-2xl ml-8' />
          {toggleLogin && (
          <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 overflow-hidden'>
            {
              userDetails.user && userDetails.user.email === "sauravghimire0123@gmail.com" && (
                <p className='flex px-4 py-2 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'><IoMdAdd className='mr-2'/> New Item</p>
              )
            }
            {
              userDetails.user && (
            <p className='flex px-4 py-2 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base '
            onClick={() => handleLogOut() }
            ><IoLogOut className='mr-2' /> Logout</p>
                )
            }
            
          </div>
          )}

        </div>
        
        

      </div>
      </div>

    {/* Mobile */}
    <div className='flex md:hidden'></div>
  </header>
  </>;
}

export default Header;