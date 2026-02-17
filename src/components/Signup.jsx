import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


export const Signup = () => {

  const navigate = useNavigate()

  const {

    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch

  } = useForm()

  const password = watch("password");

  const onSubmit = (data, e) => {

    const user = {
      ...data,
      "role": "customer"
    }

    console.log(data);
    localStorage.setItem("user", JSON.stringify(user)) || [];
    e.preventDefault()
    reset()
    toast.success("SignUp Successfull")
    navigate("/login")

  };

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(
      {
        "firstName": "Admin",
        "lastName": "Admin",
        "role": "admin",
        "password": "Admin@123",
        "cpassword": "Admin@123"
      }
    ))
  }, [])

  return (
    <>
      <div id='signup' className="flex items-center justify-center min-h-screen bg-base-200 px-4">

        <div className="flex flex-col md:flex-row bg-base-100 shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl border border-neutral-300 dark:border-neutral-700">


          {/* Left Image Section */}
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-neutral-50">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/be/71/b6/be71b6dc7b3de9cb5be96af13810a792.jpg"
              alt="Login Illustration"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

            <h1 className='text-4xl md:text-5xl font-bold mb-7 text-center md:text-left'>
              AShopStopper
            </h1>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-base-content text-center md:text-left">
              SignUp
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

              <div>
                <label className="text-sm font-medium text-base-content/80">First Name</label>
                <input
                  type="text"
                  className="w-full mt-1 border border-neutral-400 dark:border-neutral-600 bg-base-100 text-base-content rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                  placeholder='First Name'
                  {...register('firstName', { required: "Feild is Required" })}
                />
                {errors.firstName && <p className='text-red-700'>{errors.firstName.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-base-content/80">Last Name</label>
                <input
                  type="text"
                  className="w-full mt-1 border border-neutral-400 dark:border-neutral-600 bg-base-100 text-base-content rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                  placeholder='Last Name'
                  {...register('lastName', { required: "Feild is Required" })}
                />
                {errors.lastName && <p className='text-red-700'>{errors.lastName.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-base-content/80">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 border border-neutral-400 dark:border-neutral-600 bg-base-100 text-base-content rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                  placeholder='Password'
                  {...register("password", { required: "Must enter Password", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must be 8+ chars, include upper, lower, number & special char" } })}
                />
                {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-base-content/80">Confirm Password</label>
                <input
                  type="password"
                  className="w-full mt-1 border border-neutral-400 dark:border-neutral-600 bg-base-100 text-base-content rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                  placeholder='Confirm Password'
                  {...register("cpassword", { required: "Must enter same Password", validate: (value) => value === password || "Password Must be Same" })}
                />
                {errors.cpassword && <p className='text-red-700'>{errors.cpassword.message}</p>}
              </div>

              <button
                type='submit'
                className="
                w-full bg-primary text-primary-content py-2 rounded-xl font-semibold 
              hover:opacity-90 transition
              "
              >
                SignUp
              </button>

              <p className="text-sm text-base-content/60 text-center">
                Already have an account?
                <Link to="/login" className="text-primary font-semibold hover:underline ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}