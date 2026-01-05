import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


export const Profile = () => {

  const navigate = useNavigate()
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("user"))
  )

  const [open, setOpen] = useState()

  const {

    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch

  } = useForm()

  const password = watch("password");

  const onSubmit = (data) => {
    const updatedUser = {
      ...Profile,
      ...data
    }

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setProfile(updatedUser);
    setOpen(false)
  }

  const onLogout = () => {
    toast.success("Logout Successfully!")
    navigate("/")
  }

  console.log(profile);

  return (
    <>
      <div className="flex w-full min-h-screen bg-neutral-100 p-4 md:p-8 lg:p-16">
        <div className="flex flex-col lg:flex-row w-full bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* LEFT PROFILE */}
          <div className="
        flex flex-col
        w-full lg:w-150
        border-b lg:border-b-0 lg:border-r
        border-neutral-200
        items-center
        justify-center
        gap-6
        bg-neutral-50
        p-6 md:p-10
      ">

            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border border-neutral-300 overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/5f/9c/1d/5f9c1d9d15167e0a59e6dad41e8556f9.jpg"
                alt=""
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 text-center">
              {profile.firstName}
            </h1>

            <button
              onClick={() => setOpen(!open)}
              className="px-6 py-2 bg-white text-yellow-500 border border-yellow-500 rounded-xl
                     font-semibold hover:bg-yellow-500 hover:text-white transition hover:cursor-pointer"
            >
              Update Profile
            </button>

            <h6 className="flex gap-2 text-sm md:text-base">
              Role <p>{profile.role}</p>
            </h6>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col flex-1 p-6 md:p-10 lg:p-12 bg-white">

            {open ? (
              /* UPDATE FORM */
              <div className="flex flex-col w-full h-full">

                <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 tracking-tight">
                  Update Profile
                </p>

                <form
                  className="space-y-6 max-w-xl mx-auto w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >

                  {/* Username */}
                  <div>
                    <label className="text-sm font-medium text-neutral-600">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full mt-1 px-4 py-3 border border-neutral-300 rounded-xl
                  bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black transition"
                      {...register("username", { required: "username is Required" })}
                    />
                    {errors.username && (
                      <p className="text-sm text-red-600">{errors.username.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-medium text-neutral-600">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone No"
                      className="w-full mt-1 px-4 py-3 border border-neutral-300 rounded-xl
                             bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black transition"
                      {...register("phone", {
                        required: "Must enter Phone No",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Must enter vaild Phone No!"
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="text-sm font-medium text-neutral-600">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full mt-1 px-4 py-3 border border-neutral-300 rounded-xl
                             bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black transition"
                      {...register("password", {
                        required: "Must enter Password",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password must be 8+ chars, include upper, lower, number & special char"
                        }
                      })}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-600">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="text-sm font-medium text-neutral-600">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full mt-1 px-4 py-3 border border-neutral-300 rounded-xl
                             bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black transition"
                      {...register("cpassword", {
                        required: "Must enter same Password",
                        validate: (value) =>
                          value === password || "Password Must be Same"
                      })}
                    />
                    {errors.cpassword && (
                      <p className="text-sm text-red-600">{errors.cpassword.message}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-sm font-medium text-neutral-600">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full mt-1 px-4 py-3 border border-neutral-300 rounded-xl
                  bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black transition"
                      {...register("address", { required: "Must enter Address" })}
                    />
                    {errors.address && (
                      <p className="text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="w-52 py-3 bg-white text-yellow-500 border border-yellow-500 rounded-xl
                      font-semibold hover:bg-yellow-500 hover:text-white transition hover:cursor-pointer"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* PROFILE VIEW */
              <div className="flex flex-col w-full h-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-b border-neutral-200 pb-8 md:pb-10">

                  <div className="flex flex-col items-center bg-neutral-50 rounded-2xl p-6">
                    <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
                      Name
                    </p>
                    <p className="text-2xl md:text-4xl font-semibold text-neutral-900">
                      {profile.username}
                    </p>
                  </div>

                  <div className="flex flex-col items-center bg-neutral-50 rounded-2xl p-6">
                    <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
                      Phone No
                    </p>
                    <p className="text-2xl md:text-4xl font-semibold text-neutral-900">
                      {profile.phone}
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                  <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">
                    Address
                  </p>
                  <p className="text-lg font-medium text-neutral-900 text-center md:text-left">
                    {profile.address}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                  <div className="border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition shadow-sm">
                    <p className="text-xl font-semibold">Favorite Items</p>
                  </div>

                  <Link to="/cart">
                    <div className="border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition shadow-sm">
                      <p className="text-xl font-semibold">Cart Items</p>
                    </div>
                  </Link>

                  {profile.role == 'admin' ? 
                  <Link to="/query">
                  <div className="border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition shadow-sm">
                    <p className="text-xl font-semibold">Query</p>
                  </div>
                  </Link>
                  :
                  <Link to="/orderdetails">
                  <div className="border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition shadow-sm">
                    <p className="text-xl font-semibold">Ordered Items</p>
                  </div>
                  </Link>
                  }
                  

                  {profile.role == 'admin' && (
                    <div>
                      <Link
                        className="px-5 py-2 border border-green-700 rounded-xl text-green-700 font-medium
                        hover:bg-green-700 hover:text-white transition-all duration-300"
                        to="/addproduct"
                      >
                        ✚ Add Product
                      </Link>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={onLogout}
                      className="px-5 py-2 border border-red-700 rounded-xl text-red-700 font-medium
                      hover:bg-red-700 hover:text-white transition-all duration-300"
                    >
                      ➜] Logout
                    </button>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

  )
};
