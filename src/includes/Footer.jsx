import React from 'react'
import logo from '/logo.png';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <footer className="bg-primary text-white min-h-sceen w-full px-6">
    <div className="container mx-auto px-6 py-12">
        <div className="md:-mx-3 md:flex md:items-center md:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight md:mx-3 xl:text-4xl">Pesan layanan kami sekarang</h1>

        <div className="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
            <a target="blank" href="https://shopee.co.id/shop/1111644155" className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <span className="mx-2">Order</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mx-2 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </a>
        </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
            <p target="blank" href="https://shopee.co.id/shop/1111644155" className="font-semibold">Order cepat</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a target="blank" href="https://shopee.co.id/shop/1111644155" className="transition-colors duration-300 hover:text-blue-500 hover:underline">Via Tokopedia</a>
            <a target="blank" href="https://shopee.co.id/shop/1111644155" className="transition-colors duration-300 hover:text-blue-500 hover:underline">Via Shopee</a>
            <a target="blank" href="https://shopee.co.id/shop/1111644155" className="transition-colors duration-300 hover:text-blue-500 hover:underline">Via WhatsApp</a>
            </div>
        </div>

        <div>
            <p className="font-semibold">Menu</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <Link to="/">
            <a className="transition-colors duration-300 hover:text-blue-500 hover:underline">Beranda</a>
            </Link>
            <Link to="/portofolio">
            <a className="transition-colors duration-300 hover:text-blue-500 hover:underline">Portofolio</a>
            </Link>
            <Link to="/layanan">
            <a className="transition-colors duration-300 hover:text-blue-500 hover:underline">Layanan</a>
            </Link>
            </div>
        </div>

        <div>
            <p className="font-semibold">Layanan</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a className="transition-colors duration-300 hover:text-blue-500 hover:underline">Website Landing Page</a>
            <a className="transition-colors duration-300 hover:text-blue-500 hover:underline">Website Sekolah</a>
            <a className="transition-colors duration-300 hover:text-blue-500 hover:underline">Website UMKM</a>
            </div>
        </div>

        <div>
            <p className="font-semibold">Kontak</p>

            <div className="mt-5 flex flex-col items-start space-y-2">
            <a target="blank" href="https://www.instagram.com/waktunyabikinwebsite/" className="transition-colors duration-300 hover:text-blue-500 hover:underline">@waktunyabikinwebsite</a>
            <a href="#" className="transition-colors duration-300 hover:text-blue-500 hover:underline">waktunyabikinwebsite@gmail.com</a>
            </div>
        </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className='flex gap-2'>
        <Link to="/">
        <img src={logo} className='w-10' alt="logo" />
            </Link>
            <Link to="/">
            <a className="text-2xl font-bold text-white hover:text-white lg:text-3xl">
              waktunyabikinwebsite
            </a>
            </Link>
            </div>

        <p className="mt-4 text-sm text-white sm:mt-0">© Copyright 2023. All Rights Reserved.</p>
        </div>
    </div>
    </footer>
    </div>
  )
}

export default Footer