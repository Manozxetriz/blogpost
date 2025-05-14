import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import avatar from '../../assets/pic.jpg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="w-full bg-white px-6 py-4 flex justify-between items-center z-20 relative">
        <div className="flex items-center space-x-4 md:space-x-8">
          <h1 className="text-1xl font-bold text-gray-900">
            <span className="text-black mr-2">★</span>
            <Link to="/">DEV.MANOZ</Link>
          </h1>
        </div>

        <div className="hidden md:flex flex-grow justify-center mr-20">
          <ul className="flex space-x-6 text-black ">
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/work" className="hover:text-black">Work</Link></li>
            <li><Link to="/blogs" className="hover:text-black">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact me</Link></li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
          />
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6 z-10 p-6">
          <ul className="text-xl space-y-4">
            <li onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li onClick={toggleMenu}><Link to="/work">Work</Link></li>
            <li onClick={toggleMenu}><Link to="/blogs">Blogs</Link></li>
            <li onClick={toggleMenu}><Link to="/contact">Contact me</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
