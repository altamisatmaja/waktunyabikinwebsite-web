import React from 'react'
import Navbar from '../includes/Navbar.jsx';
import Footer from '../includes/Footer.jsx';

function Kontak() {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-primary px-6 w-full">
    <div className="container mx-auto flex min-h-screen flex-col px-6 py-12">
        <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="text-white lg:mx-6 lg:w-1/2">
            <h1 href="https://www.instagram.com/waktunyabikinwebsite/" target="_blank" className="text-3xl font-semibold capitalize lg:text-5xl">Konsultasi Gratis</h1>

            <p className="mt-6 max-w-xl">Kami menyediakan layanan konsultasi gratis untuk kamu</p>

            <div className="mt-6 space-y-8 md:mt-8">
            <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white"> Kantor Waktunya Bikin Website </span>
            </p>

            <p className="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 w-72 truncate text-white">waktunyabikinwebsite@gmail.com</span>
            </p>
            </div>

            <div className="mt-6 md:mt-8">
            <h3 className="text-gray-300">Follow us</h3>

            <div className="-mx-1.5 mt-4 flex">
                <a className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500" href="https://www.instagram.com/waktunyabikinwebsite/" target="_blank">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                </svg>
                </a>
            </div>
            </div>
        </div>

        <div className="mt-8 lg:mx-6 lg:w-1/2">
            <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl">
            <h1 className="text-2xl font-medium text-gray-600">Yuk, hubungi kami!</h1>

            <form className="mt-6">
                <div className="flex-1">
                <label className="mb-2 block text-sm text-gray-600">Nama Lengkap</label>
                <input type="text" placeholder="Waktunya Bikin Websie" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                </div>

                <div className="mt-6 flex-1">
                <label className="mb-2 block text-sm text-gray-600">Email Anda</label>
                <input type="email" placeholder="waktunyaorder@gmail.com" className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                </div>

                <div className="mt-6 w-full">
                <label className="mb-2 block text-sm text-gray-600">Pesan</label>
                <textarea className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:h-48" placeholder="Masukkan pesan Anda..."></textarea>
                </div>

                <button className="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Kontak