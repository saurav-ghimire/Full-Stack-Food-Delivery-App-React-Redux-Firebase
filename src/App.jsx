import { AnimatePresence } from 'framer-motion'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
