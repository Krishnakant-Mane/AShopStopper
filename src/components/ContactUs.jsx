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

  const onSubmit = (data, e) => {

    const existingMessage = JSON.parse(localStorage.getItem('message')) || [];

    const updatedMessage = [...existingMessage, data];

    localStorage.setItem('message', JSON.stringify(updatedMessage) || []);

    e.preventDefault()

    reset()
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full min-h-screen border border-black rounded-2xl">

        <div className="flex border w-full lg:w-[40%] rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/7e/91/58/7e915872ca68d0f4a411f157cdee9e09.jpg"
            alt=""
          />
        </div>

        <div className="p-4 sm:p-10 lg:p-30 w-full border rounded-2xl">
          <div className="border rounded-2xl">

            <div>
              <p className="flex m-1 justify-center items-center text-3xl sm:text-5xl lg:text-7xl font-bold">
                Contact Us
              </p>
            </div>

            <div className="p-5">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-sm font-medium text-neutral-700">First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register("firstName", { required: "Enter require field" })}
                    />
                    {errors.firstName && <p className="text-red-700">{errors.firstName.message}</p>}
                  </div>

                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-sm font-medium text-neutral-700">Last Name:</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register("lastName", { required: "Enter require field" })}
                    />
                    {errors.lastName && <p className="text-red-700">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-sm font-medium text-neutral-700">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register("email", {
                        required: "Enter require field",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter Correct Email",
                        },
                      })}
                    />
                    {errors.email && <p className="text-red-700">{errors.email.message}</p>}
                  </div>

                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-sm font-medium text-neutral-700">Phone No</label>
                    <input
                      type="tel"
                      placeholder="Phone No"
                      className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                      {...register("phone", {
                        required: "Enter require field",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter correct Phone No",
                        },
                      })}
                    />
                    {errors.phone && <p className="text-red-700">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-neutral-700">Message</label>
                  <textarea
                    className="w-full h-32 sm:h-40 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                    placeholder="Message"
                    {...register("message", { required: "Enter Message" })}
                  />
                </div>
                <div className="flex justify-center items-center w-full mt-6">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 bg-black text-white py-2 rounded-xl font-semibold hover:bg-neutral-900 transition"
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
