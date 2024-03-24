import { AnimatePresence } from 'framer-motion'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <AnimatePresence>
      <div className='w-screen h-screen bg-primary'>
      <Header />
      <Outlet/>
      </div>
    </AnimatePresence>
    </>
  )
}

export default App
