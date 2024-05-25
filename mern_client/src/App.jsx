import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

const Navbar =() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const  [isStickly, setIsStickly] = useState(false);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsStickly(true);
      }
      else{
        setIsStickly(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return() => {
      window.addEventListener("scroll", handleScroll);
    }
  }, [])

  const navItems =[
    {link: "Home", path: "/"},
    {link: "About", path: "/about"},
    {link: "Shop", path: "/shop"},
    {link: "Sell your book", path: "/admin/dashboard"},
    {link: "Blog", path: "/blog"}
  ]
}

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
