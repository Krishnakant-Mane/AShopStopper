import React from 'react'
import { MapLibreMap } from './MapLibreMap'
import { useForm } from 'react-hook-form'


export const ContactUs = () => {

  const {

    register,
    handleSubmit,
    reset,
    formState: { errors }

  } = useForm()

  const onSubmit = (data, e) =>{

    const existingMessage = JSON.parse(localStorage.getItem('message')) || [];
    
    const updatedMessage = [...existingMessage, data];

    localStorage.setItem('message',JSON.stringify(updatedMessage) || []);
    
    e.preventDefault()

    reset()
  }
  return (
    <>
      <div className=' flex w-full h-screen border border-black rounded-2xl'>
        {/* Image */}
        <div className='flex border w-300 rounded-2xl overflow-hidden'>
          <img className='flex w-full justify-center items-center' src="https://i.pinimg.com/736x/7e/91/58/7e915872ca68d0f4a411f157cdee9e09.jpg" alt="" />
        </div>

        {/* content */}
        <div className='p-30 w-full border rounded-2xl' >
          <div className='border rounded-2xl'>
            <div className=''>
              <p className='flex m-1 justify-center items-center text-7xl font-bold'>Contact Us</p>
            </div>
            <div className='p-5'>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="firstName" className="text-sm font-medium text-neutral-700">First Name:</label>
                    <input type="text" id='firstName' placeholder='First Name' className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register('firstName', { required: "Enter require field" })}
                    />
                    {errors.firstName && <p className='text-red-700'>{errors.firstName.message}</p>}
                  </div>

                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="lastName" className="text-sm font-medium text-neutral-700">Last Name:</label>
                    <input type="text" id='Last Name' placeholder='Last Name' className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register('lastName', { required: "Enter require field" })}
                    />
                    {errors.firstName && <p className='text-red-700'>{errors.firstName.message}</p>}
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                    <input type="email" id='email' placeholder='Email' className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register('email', { required: "Enter require field", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter Correct Email" } })}
                    />
                    {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
                  </div>

                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="phone" className="text-sm font-medium text-neutral-700">Phone No</label>
                    <input type="tel" id='phone' placeholder='Phone No' className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register('phone', { required: "Enter require field", pattern: { value: /^[6-9]\d{9}$/, message: "Enter correct Phone No" } })}
                    />
                    {errors.phone && <p className='text-red-700'>{errors.phone.message}</p>}
                  </div>
                </div>

                <div >
                  <label htmlFor="message" className='text-sm font-medium text-neutral-700'>Message</label>
                  <textarea type="text" name="message" id="message" className='w-full h-50 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black' placeholder='Message'
                    {...register('message', { required: "Enter Message" })}
                  />
                </div>

                <div className='flex justify-center items-center w-full'>
                  <button
                    type='submit'
                    className=" flex justify-center items-center
            w-1/2 bg-black text-white py-2 rounded-xl font-semibold 
            hover:bg-neutral-900 transition hover: cursor-pointer
          "
                  >
                    Submit
                  </button>
                </div>

              </form>
            </div>

          </div>

        </div>

      </div>
    </>

  )
}
