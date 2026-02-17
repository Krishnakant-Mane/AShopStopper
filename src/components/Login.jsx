import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { UserInfoContext } from "../context/UserInfoContext";
import toast from 'react-hot-toast'

export const Login = () => {
  const { userInfoDetails } = useContext(UserInfoContext);


  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {

    const storedData = JSON.parse(localStorage.getItem("user"));

    if (!storedData) {
      toast.error("No account Found. Please signup first.");
    } else if (data.firstName === storedData.firstName && data.password === storedData.password) {
      userInfoDetails(storedData);
      console.log(userInfoDetails);
      toast.success("Login successfull");
      navigate("/home")
    } else {
      toast.error("Invalid username or Password")
    }
    console.log("Checking done...");
  };


  return (
    <>
      <div id='login' className="flex items-center justify-center min-h-screen bg-base-200 px-4">

        <div className="flex flex-col md:flex-row bg-base-100 shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl border border-neutral-300 dark:border-neutral-700">

          {/* Left Form Section */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

            <h1 className='text-4xl md:text-5xl font-bold mb-7 text-center md:text-left'>
              AShopStopper
            </h1>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-base-content text-center md:text-left">
              Login
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

              <div>
                <label className="text-sm font-medium text-base-content/80">Username</label>
                <input
                  type="text"
                  className="w-full mt-1 border border-neutral-400 dark:border-neutral-600 bg-base-100 text-base-content rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                  placeholder='Username'
                  {...register("firstName", { required: "Enter Username" })}
                />
                {errors.firstName && <p className='text-red-700'>{errors.firstName.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-base-content/80">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 border border-neutral-400 dark:border-neutral-600 bg-base-100 text-base-content rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                  placeholder='Password'
                  {...register("password", { pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Enter Password" } })}
                />
                {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
              </div>

              <button
                className="
            w-full bg-primary text-primary-content py-2 rounded-xl font-semibold 
            hover:opacity-90 transition
          "
              >
                Login
              </button>

              <p className="text-sm text-base-content/60 text-center">
                Don’t have an account?
                <Link to="/signup" className="text-primary font-semibold hover:underline ml-1">
                  Signup
                </Link>
              </p>
            </form>
          </div>

          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-neutral-50">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/79/e7/89/79e789cc6a306a77c3e85770cca26461.jpg"
              alt="Login Illustration"
            />
          </div>

        </div>

      </div>

    </>
  )
}
