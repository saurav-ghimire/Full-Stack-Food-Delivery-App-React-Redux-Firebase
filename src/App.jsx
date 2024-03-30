import { AnimatePresence } from 'framer-motion'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from './store/productSlicer';

function App() {
  

  const dispatch = useDispatch();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch(productActions.addProduct(data));
    } )
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
    <AnimatePresence>
      <div className="wrapper">
      <div className='bg-primary'>
      <Header />
      <Outlet/>

      <ToastContainer />
      </div>
      </div>
    </AnimatePresence>
    </>
  )
}

export default App
