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
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 right-0 left-0 bg-blue-100" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* logo */}
          <Link to="/" className='text-2xl font-bold flex items-center gap-3 text-blue-400'>
            <TbCircleLetterBFilled className='inline-block' style={{ fontSize: '2rem' }} />Bookly
          </Link>

          {/* items for larger devices */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className="block text-base md:text-lg lg:text-xl text-black uppercase cursor-pointer hover:text-blue-400">
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* menu for mobile devices */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <IoMenu className='h-5 w-5 text-black' />}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <ul className={`space-y-4 px-4 mt-16 py-7 bg-blue-100 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-400">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
