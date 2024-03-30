import { AnimatePresence } from 'framer-motion';
import { Header, Loader, Footer } from './components'; // Import the Loader component
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from './store/productSlicer';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getAllFoodItems();
      dispatch(productActions.addProduct(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AnimatePresence>
        <div className="wrapper">
          <div className='bg-primary'>
            <Header />
            {/* Conditional rendering based on loading state */}
            {loading ? (
              <Loader />
            ) : (
              <Outlet />
            )}
            <Footer />
            <ToastContainer />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
