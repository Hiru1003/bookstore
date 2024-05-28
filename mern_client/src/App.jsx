import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Myfooter from './components/Myfooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <Myfooter/>
    </>
  )
}

export default App
