import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbCircleLetterBFilled } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" }
  ];

  return (
    <header className={isSticky ? "sticky" : ""}>
      <nav>
        <div>
          {/* logo */}
          <Link to="/" className='text-2xl font-bold flex items-center gap-3 text-blue-400'>
            <TbCircleLetterBFilled className='inline-block' style={{ fontSize: '2rem' }} />Bookly
          </Link>

          {/* items for larger device */}
          <ul className="flex space-x-12 hidden">
            {
              navItems.map(({ link, path }) => (
      
                  <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-400">
                    {link}
                  </Link>
    
              ))
            }
          </ul>

          {/* button for larger device */}
          <div>
            <button className='space-x-12 hidden lg-flex items-center'>
                <IoMenu className='w-5 hover:text-blue-400'/>
            </button>
          </div>

          {/* menu for mobile device */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                    isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <IoMenu className='h-5 w-5 text-black'/>
                }
            </button>
          </div>

          {/* navitems for mobile device */}
          <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-100 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
              navItems.map(({ link, path }) => (
          
                  <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-400">
                    {link}
                  </Link>

              ))
            }
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
