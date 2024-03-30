import { AnimatePresence } from 'framer-motion'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from './store/productSlicer';
import CartContainer from './components/CartContainer';

function App() {
  
  const [cartVisible, setCartVisible] = useState(false);

  const dispatch = useDispatch();
  const productStore = useSelector((store) => store.product)
  const cartStore = useSelector((store) => store.cart)
  
  

  // Monitor changes in the cart to show/hide CartContainer
  useEffect(() => {
    if (cartStore.length > 0) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  }, [cartStore]);


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

      {cartVisible && <CartContainer />}

      <ToastContainer />
      </div>
      </div>
    </AnimatePresence>
    </>
  )
}

export default App
