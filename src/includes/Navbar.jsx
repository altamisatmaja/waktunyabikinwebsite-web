import logo from '/logo.png';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
            <section className="bg-primary font-Montserrat">
      <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div className='flex gap-2'>
            <img src={logo} className='w-10' alt="" />
            <a className="text-2xl font-bold text-white hover:text-white lg:text-3xl" href="/">
              waktunyabikinwebsite
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full bg-primary px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="lg:-px-8 flex flex-col font-medium text-xl space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <Link to="/">
            <a className="transform text-white transition-colors duration-300 hover:text-blue-500 lg:mx-5" href="#">
              Beranda
            </a>
            </Link>
            <Link to="/portofolio">
            <a className="transform text-white transition-colors duration-300 hover:text-blue-500 lg:mx-5" href="#">
              Portofolio
            </a>
            </Link>
            <Link to="/layanan">
            <a className="transform text-white transition-colors duration-300 hover:text-blue-500 lg:mx-5" href="#">
              Layanan
            </a>
            </Link>
            <Link to="/kontak">
            <a className="transform text-white transition-colors duration-300 hover:text-blue-500 lg:mx-5" href="#">
              Kontak
            </a>
            </Link>
          </div>

          <a className="mt-4 block rounded-lg text-xl bg-gray-800 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:mt-0 lg:w-auto" href="https://shopee.co.id/shop/1111644155" target="_blank">
            Order via Shopee
          </a>
        </div>
      </nav>
    </section>
    </div>
  )
}

export default Navbar