import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="w-full bg-base-200 text-base-content border rounded-2xl mt-10">
        <div className="max-w-[1400px] mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="/home">
                <img
                  className="w-16 h-16"
                  src="https://cdn-icons-png.flaticon.com/128/3665/3665892.png"
                  alt="AShopStopper"
                />
              </a>

              <h1 className="text-xl font-bold">AShopStopper</h1>
              <p className="text-sm text-gray-500">
                Your one-stop online shopping destination
              </p>
            </div>

          </div>

          
          <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
            ©2025 AShopStopper. All rights reserved.
          </div>

        </div>
      </footer>
    </>

  )
}

/*
  <aside>
          <a href=""><img className='w-20 h-20' src="https://cdn-icons-png.flaticon.com/128/3665/3665892.png" alt="" /></a>
          <p>
            AShopStopper
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="font-bold">SERVICES</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold">COMPANY</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold">LEGAL</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
*/ 