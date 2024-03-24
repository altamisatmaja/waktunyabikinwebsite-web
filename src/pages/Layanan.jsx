import React from 'react'
import Navbar from '../includes/Navbar.jsx';
import Footer from '../includes/Footer.jsx';
import { Link } from "react-router-dom";

function Layanan() {
  return (
    <>
    <Navbar/>
        <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
            <div class="max-w-xl px-5 text-center">
                <h2 class="mb-2 text-[42px] font-bold text-zinc-800">Data belum diinput</h2>
                <p class="mb-2 text-lg text-zinc-500">Mohon maaf atas ketidaknyamanan Anda, data akan segera kami input 😁 </p>
                <Link to="/">
                <a  class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Kembali ke beranda →</a>
                </Link>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Layanan