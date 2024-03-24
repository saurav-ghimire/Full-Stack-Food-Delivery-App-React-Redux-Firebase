import logo from '../assets/logo.png'
import Avatar from '../assets/avatar.png'

import { IoBasket, IoLogOut } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config'
import { userActions } from '../store/userSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { toast } from 'react-toastify';

function Header() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user)
  console.log(userDetails)
  // to authenticate
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();

  // Function to handle login
  const login = async () => {
    try {
      if (!userDetails) {
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { refreshToken, providerData } = user;
        dispatch(userActions.storeUser(providerData[0]));
        notify("Successfully Loggedin");
      } else {
        setToggleLogin(!toggleLogin);
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  }

  // Function to handle logout
  const handleLogOut = () => {
    dispatch(userActions.logOutUser());
    notify("Successfully Loggedout");
  }

  // Function to display toast notifications
  const notify = (message) => {
    toast(message);
  }

  return (
    <header className='w-screen fixed z-50 p-6 px-16'>
      {/* Desktop and Tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <motion.div
        initial={{opacity:0, x:-200}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-200}}
         className='flex items-center gap-2'>
          <Link to="/">
            <img src={logo} className='w-8 object-cover' alt="" />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </Link>
        </motion.div>
        <div className='flex items-center justify-between'>
          <motion.ul
          initial = {{opacity : 0, x:200}}
          animate = {{opacity : 1, x:0}}
          exit = {{opacity : 0, x:200}}
           className='flex items-center gap-8 '>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <IoBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex item-center justify-center absolute -top-1 -right-2">
              <p className='text-xs text-white font-semibold leading-0'>0</p>
            </div>
          </div>

          <div className='relative'>
            <motion.img
              whileTap={{ scale: (0.6) }}
              onClick={login}
              src={userDetails ? userDetails.photoURL : Avatar}
              alt="User Image"
              className='w-10 min-w-[40px] min-h-[40px] cursor-pointer rounded-3xl drop-shadow-2xl ml-8'
            />
            {toggleLogin && (
              <motion.div
              initial = {{opacity : 0, scale:0.6}}
              animate = {{opacity : 1, scale:1}}
              exit = {{opacity : 0, scale:0.6}}
              className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 overflow-hidden'>
                {
                  userDetails && userDetails.email === "sauravghimire0123@gmail.com" && (
                    <p className='flex px-4 py-2 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>
                      <IoMdAdd className='mr-2' /> New Item
                    </p>
                  )
                }
                {
                  userDetails && (
                    <p
                      className='flex px-4 py-2 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                      onClick={() => handleLogOut()}
                    >
                      <IoLogOut className='mr-2' /> Logout
                    </p>
                  )
                }
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex md:hidden'></div>
    </header>
  );
}

export default Header;
