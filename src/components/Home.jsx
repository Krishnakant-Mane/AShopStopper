import React from 'react'
import introv from '../assets/introv.mp4'
import { Products } from './Products'

export const Home = () => {

  return (
    <>
      <div className='relative w-full h-screen my-5'>
        <div className='w-full h-full border rounded-2xl'>
          <video autoPlay loop muted className='w-full h-full rounded-2xl object-cover z-0' src={introv}></video>
        </div>
        <div className='absolute inset-0 flex justify-center items-center z-10'>
          <a href="#products"><button className='px-10 py-3 hover:cursor-pointer hover:bg-primary-focus hover:scale-105 transition-all bg-primary text-primary-content rounded-xl font-semibold shadow-lg'>Shop Now</button></a>
        </div>
      </div>
      <Products />
    </>
  )
}