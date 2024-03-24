import React, { useState } from "react";
import sectionone from "/sectionone.png";
import sectiontwo from "/sectiontwo.png";
import beanbage from "/beanbage.png";
import Navbar from "../includes/Navbar.jsx";
import Footer from "../includes/Footer.jsx";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="pt-24 bg-white pb-5">
        <div className="px-5 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Waktunya</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Bikin Website{" "}
              </span>
              😎
              <br />
              <span>Siap membangun websitemu!</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Teman UMKM untuk mengembangkan website. <br /> Pengembangan
              website yang terjangkau untuk UMKM
            </p>
            <p className="px-0 mb-8 font-extrabold text-lg block text-transparent bg-clip-text w-full bg-gradient-to-r from-green-400 to-purple-500 md:text-xl lg:px-24">
              JASA WEBSITE TERJANGKAU #1
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link to="https://shopee.co.id/shop/1111644155" target="blank">
                <a className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-primary rounded-2xl sm:w-auto sm:mb-0">
                  Order sekarang
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link
                to="https://www.instagram.com/p/CzXNftvPlkb/"
                target="blank"
              >
                <a className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                  Konsultasi Gratis
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center flex-none px-4 bg-primary rounded-b-none h-11 rounded-xl">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <img
                  src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container flex flex-col mx-auto bg-white px-5">
          <div class="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
            <div class="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-0 md:gap-5">
              <div class="flex flex-col justify-center col-span-1 text-center lg:text-start">
                <h1 class="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
                  Solusi Website Terjangkau untuk UMKM
                </h1>
                <p class="mb-6 text-xl font-normal font-Montserrat text-gray-600 lg:w-3/4 text-grey-900">
                  Bergabunglah dalam Era Digital tanpa perlu khawatir! Kami
                  menyediakan Solusi Website Terjangkau yang sesuai untuk UMKM
                  Anda. Dengan sentuhan Kreatif, Inovatif, dan Profesional, kami
                  akan membantu Anda membangun kehadiran online yang kuat.
                  Dapatkan website yang sesuai dengan visi dan tujuan bisnis
                  Anda, dan bersinar di dunia digital! 💻🌟
                </p>
                <div class="flex flex-col items-center gap-4 lg:flex-row">
                  <button
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-primary rounded-2xl sm:w-auto sm:mb-0"
                  >
                    Order via Shopee
                  </button>
                  <button
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-primary bg-white border-2 border-primary rounded-2xl sm:w-auto sm:mb-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Order via Tokopedia
                  </button>
                </div>
              </div>
              <div class="items-center justify-end hidden col-span-1 md:flex">
                <img
                  class="w-4/5 rounded-md"
                  src={sectionone}
                  alt="header image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 my-5"></div>
      </section>

      <section>
        <div class="container flex flex-col mx-auto bg-white px-5">
          <div class="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
            <div class="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-0 md:gap-5">
              <div class="items-center justify-start hidden col-span-1 md:flex">
                <img
                  class="w-4/5 rounded-md"
                  src={sectiontwo}
                  alt="header image"
                />
              </div>

              <div class="flex flex-col justify-center col-span-1 text-center lg:text-start">
                <h1 class="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
                  Bikin website tanpa ribet 🤯
                </h1>
                <p class="mb-6 text-2xl font-Montserrat text-gray-600 font-normal lg:w-3/4 text-grey-900">
                  Hooy, lupakan masa lalu bisnismu yang gitu-gitu aja! Bareng
                  waktunyabikinwebsite, kita naikin level UMKM-mu, bro! Bikin
                  nilai usahamu nambah tanpa ribet. Jadi, buruan, gak usah
                  ketinggalan, yuk rametin bisnismu online! 🚀✨
                </p>
                <div class="flex flex-col items-center gap-4 lg:flex-row">
                  <button
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-primary rounded-2xl sm:w-auto sm:mb-0"
                  >
                    Order via Shopee
                  </button>
                  <button
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-primary bg-white border-2 border-primary rounded-2xl sm:w-auto sm:mb-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Order via Tokopedia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="py-20 mx-auto max-w-7xl p-5">
          <div class="container items-center">
            <div class=" sm:text-center">
              <h2 class="md:text-5xl text-3xl font-extrabold tracking-tight">
                Layanan yang kami sediakan
              </h2>
              <div class="flex justify-center">
                <p class="md:w-1/2 mt-6 text-xl/8 font-medium text-gray-500">
                  Kami menyediakan layanan yang profesional dan terjangkau
                </p>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 grikd-cols-1 gap-6 mt-16">
              <div>
                <div class="p-7 rounded-xl bg-primary">
                  <h3 class="text-xl font-semibold text-white mb-7">
                    Website Landing Page
                  </h3>
                  <p class="font-medium leading-7 text-white mb-6">
                    Kami menyediakan layanan Landing Page yang berkualitas untuk
                    Anda
                  </p>
                  <a
                    href="#"
                    class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 "
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class=" h-5 w-5 ms-3"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <div class="p-7 rounded-xl bg-primary">
                  <h3 class="text-xl font-semibold text-white mb-7">
                    Website Company Profile
                  </h3>
                  <p class="font-medium leading-7 text-white mb-6">
                    Kami menyediakan layanan Company Profile untuk perusahaan
                    Anda
                  </p>
                  <a
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 "
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class=" h-5 w-5 ms-3"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <div class="p-7 rounded-xl bg-primary ">
                  <h3 class="text-xl font-semibold text-white mb-7">
                    Website Toko Online
                  </h3>
                  <p class="font-medium leading-7 text-white mb-6">
                    Kami menyediakan layanan Website Toko Online untuk Toko Anda
                  </p>
                  <a
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 "
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class=" h-5 w-5 ms-3"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <div class="p-7 rounded-xl bg-primary ">
                  <h3 class="text-xl font-semibold text-white mb-7">
                    Website Portofolio
                  </h3>
                  <p class="font-medium leading-7 text-white mb-6">
                    Kami menyediakan layanan Website Portofolio untuk Personal
                    Branding Anda
                  </p>
                  <a
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 "
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class=" h-5 w-5 ms-3"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <div class="p-7 rounded-xl bg-primary ">
                  <h3 class="text-xl font-semibold text-white mb-7">
                    Website Sekolah
                  </h3>
                  <p class="font-medium leading-7 text-white mb-6">
                    Kami menyediakan layanan Website Sekolah untuk marketing
                    Sekolah Anda
                  </p>
                  <a
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 "
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class=" h-5 w-5 ms-3"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <div class="p-7 rounded-xl bg-primary ">
                  <h3 class="text-xl font-semibold text-white mb-7">
                    Website UMKM
                  </h3>
                  <p class="font-medium leading-7 text-white mb-6">
                    Kami menyediakan layanan Website UMKM untuk G0-Digital UMKM
                    Anda
                  </p>
                  <a
                    href="https://shopee.co.id/shop/1111644155"
                    target="_blank"
                    class="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500 "
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class=" h-5 w-5 ms-3"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="bg-primary min-h-screen xs:px-3 text-white py-8 rounded-3xl xs:container lg:m-10 lg:p-5">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300  uppercase tracking-loose">
                Working Process
              </p>
              <p className="text-3xl md:text-4xl font-extrabold leading-normal md:leading-relaxed mb-2">
                Working Process of waktunyabikinwebsite
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Ini adalah tahap proses penanganan pesanan yang masuk ke
                WaktunyaBikinWebsite. Kamu nggak usah khawatir, tim kita udah
                siap buat bikin website kamu dengan penuh semangat dan inovasi,
                biar bisnis kamu makin kece dan laris manis di dunia maya!
                💼🖥️🌟
              </p>
              <a
                href="https://shopee.co.id/shop/1111644155"
                target="_blank"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded-xl shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Order Sekarang
              </a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #ffffff",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #ffffff",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        Proses #1
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Checkout
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Pilihlah kategori website yang ingin Anda pesan.
                        Checkout bisa dilakukan melalui Shopee atau Tokopedia
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        Proses #2
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Request Pengerjaan
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Setelah Checkout, kami akan memberikan form pengisian
                        untuk detailing isi website supaya pengerjaan sesuai
                        dengan apa yang Anda inginkan
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        Proses #3
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Proses Pengerjaan
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Proses pengerjaan memakan waktu 3 hingga 5 hari
                        tergantung kompleksitas website dan waiting list orderan
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-yellow-300">
                        Proses #4
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Revisi dan Finalisasi
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Setelah proses pengerjaan, kami akan konfirmasi ke Anda
                        untuk melihat hasil dari proses pengerjaan. Anda dapat
                        merevisi pengerjaan apabila ada sesuatu yang tidak
                        sesuai dengan request
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        Proses #5
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Deployment
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Apabila sudah direvisi dan sudah dikonfirmasi bahwa
                        websitenya sudah cocok sesuai request, website siap di
                        Deploy dan siap digunakan!
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto md:-mt-36 xs:mt-36"
                  src={beanbage}
                  alt="ilustrasi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-center text-3xl font-extrabold lg:text-6xl">
              Harga Hosting dan Domain my.id
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 xl:mt-6">
              Kami juga menyediakan layanan hosting dan domain dengan kualitas
              terbaik dan harga yang terjangkau untuk kebutuhan deployment
              website Anda
            </p>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-12">
              <div className="w-full space-y-8 rounded-lg border border-gray-400 p-8 text-center">
                <p className="font-medium text-gray-500">Domain my.id</p>
                <h2 className="text-5xl font-bold uppercase">Rp 10.0000,-</h2>
                <p className="font-medium text-gray-500">Per 1 Bulan</p>
                <button
                  href="https://shopee.co.id/shop/1111644155"
                  target="_blank"
                  className="mt-10 w-full transform rounded-md bg-primary px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Start Now
                </button>
              </div>
              <div className="w-full space-y-8 rounded-lg bg-primary p-8 text-center">
                <p className="font-medium text-gray-200">Domain.my.id</p>
                <h2 className="text-5xl font-bold uppercase text-white">
                  Rp 5.0000,-
                </h2>
                <p className="font-medium text-gray-200">Per tahun</p>
                <button className="mt-10 w-full transform rounded-md bg-white px-4 py-2 capitalize tracking-wide text-primary transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                  Start Now
                </button>
                <p
                  href="https://shopee.co.id/shop/1111644155"
                  target="_blank"
                  className="font-medium text-gray-200"
                >
                  *berlaku pada tahun pertama
                </p>
              </div>

              <div className="w-full space-y-8 rounded-lg border border-gray-400 p-8 text-center">
                <p className="font-medium text-gray-500">Domain my.id</p>
                <h2 className="text-5xl font-bold uppercase">Rp 30.0000,-</h2>
                <p className="font-medium text-gray-500">Per 6 Bulan</p>
                <button
                  href="https://shopee.co.id/shop/1111644155"
                  target="_blank"
                  className="mt-10 w-full transform rounded-md bg-primary px-4 py-2 capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="w-full mx-auto px-10 bg-white py-20">
          <div class="flex flex-col items-center text-center">
            <h2 class="font-extrabold text-6xl mt-5 tracking-tight">FAQ</h2>
            <p class="text-neutral-500 text-3xl mt-3">
              Frequenty asked questions
            </p>
          </div>
          <div class="grid divide-y divide-neutral-200 w-full text-2xl mx-auto mt-8">
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Apa itu waktunyabikinwebsite?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  waktunyabikinwebsite adalah Agency yang menyediakan jasa
                  layanan pembuatan website profesional yang harganya terjangkau
                  dan diikuti dengan kualitas terbaik!
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Layanan apa yang disediakan waktunyabikinwebsite?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Layanan yang tersedia dari kami adalah jasa pembuatan website.
                  Tersedia beragam pilihan layanan yang ada di
                  waktunyabikinwebsite, semua dapat disesuaikan dengan kebutuhan
                  Anda
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Berapa kali revisi ketika proses pengerjaan berlangsung?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Jumlah revisi maksimal setiap pengerjaan adalah tergantung
                  orderan yang Anda pilih!
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Apakah setelah pengerjaan selesai kita bisa request
                    development website?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Proses development dapat dilakukan ketika proses pengerjaan
                  selesai. Tentunya, hal ini juga akan menambah cost Anda dan
                  membuat website Anda menjadi lebih terkelola dengan baik!
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Apakah hostingan dan domainnya gratis?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Hostingan kami sediakan secara gratis untuk 12 bulan pertama
                  dan domain juga kami sediakan secara gratis pada 1 bulan
                  pertama dengan domain my.id
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Bagaimana proses lanjutan setelah melakukan Checkout?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Kami akan menghubungi Anda dan meminta Anda untuk melakukan
                  pengisian formulir request data-data yang kami butuhkan untuk
                  pembuatan website
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Apakah website yang dibangun aman?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Website dibangun secara aman dan sudah menggunakan SSL
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Apakah kita akan terima jadi websitenya?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Benar sekali, di akhir, Anda hanya perlu menerima website jadi
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Jika belum memiliki logo, apakah ada layanan pembuatan logo?
                  </span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Kami juga menyediakan jasa pembuatan logo dan tentunya akan
                  dikenakan fee tambahan
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-primary px-6 w-full">
        <div className="container mx-auto flex min-h-screen flex-col px-6 py-12">
          <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
            <div className="text-white lg:mx-6 lg:w-1/2">
              <h1
                href="https://www.instagram.com/p/CzXNftvPlkb/"
                target="_blank"
                className="text-3xl font-semibold capitalize lg:text-5xl"
              >
                Konsultasi Gratis
              </h1>

              <p className="mt-6 max-w-xl">
                Kami menyediakan layanan konsultasi gratis untuk kamu
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-white">
                    {" "}
                    Kantor Waktunya Bikin Website{" "}
                  </span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-white">
                    waktunyabikinwebsite@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300">Follow us</h3>

                <div className="-mx-1.5 mt-4 flex">
                  <a
                    className="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500"
                    href="https://www.instagram.com/p/CzXNftvPlkb/"
                    target="_blank"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mx-6 lg:w-1/2">
              <div className="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl lg:max-w-xl">
                <h1 className="text-2xl font-medium text-gray-600">
                  Yuk, hubungi kami!
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="mb-2 block text-sm text-gray-600">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="Waktunya Bikin Websie"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <label className="mb-2 block text-sm text-gray-600">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      placeholder="waktunyaorder@gmail.com"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6 w-full">
                    <label className="mb-2 block text-sm text-gray-600">
                      Pesan
                    </label>
                    <textarea
                      className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:h-48"
                      placeholder="Masukkan pesan Anda..."
                    ></textarea>
                  </div>

                  <button className="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
