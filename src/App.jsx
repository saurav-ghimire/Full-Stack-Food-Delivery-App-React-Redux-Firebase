import { AnimatePresence } from 'framer-motion'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <AnimatePresence>
      <div className='w-screen h-screen bg-primary'>
      <Header />
      <Outlet/>

      <ToastContainer />
      </div>
    </AnimatePresence>
    </>
  )
}

export default App
