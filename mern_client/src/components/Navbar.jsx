import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbCircleLetterBFilled } from "react-icons/tb";

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
          <Link to="/" className='text-2xl font-bold flex items-center gap-3'>
            <TbCircleLetterBFilled className='inline-block' style={{ fontSize: '2rem' }}/>Bookly
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
