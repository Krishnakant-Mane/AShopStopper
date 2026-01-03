import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { UserInfoContext } from "../context/UserInfoContext";
import { logo } from "../assets/logo.png"


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
      alert("No account Found. Please signup first.");
      return;
    }

    if (data.username === storedData.username && data.password === storedData.password) {
      userInfoDetails(storedData);
      console.log(userInfoDetails);

      alert("Login successfull");
      navigate("/home");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: "testuser", password: "Test@1234" })
      );
    }
  }, []);


  return (
    <>
      <div id='login' className="flex items-center justify-center min-h-screen bg-neutral-100 px-4">

        <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl">

          {/* Left Form Section */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

            <h1 className='text-4xl md:text-5xl font-bold mb-7 text-center md:text-left'>
              AShopStopper
            </h1>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 text-center md:text-left">
              Login
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

              <div>
                <label className="text-sm font-medium text-neutral-700">Username</label>
                <input
                  type="text"
                  className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                  placeholder='Username'
                  {...register("username", { required: "Enter Username" })}
                />
                {errors.username && <p className='text-red-700'>{errors.username.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 border border-neutral-400 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                  placeholder='Password'
                  {...register("password", { pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Enter Password" } })}
                />
                {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
              </div>

              <button
                className="
            w-full bg-black text-white py-2 rounded-xl font-semibold 
            hover:bg-neutral-900 transition
          "
              >
                Login
              </button>

              <p className="text-sm text-neutral-600 text-center">
                Don’t have an account?
                <a href="/signup" className="text-black font-semibold hover:underline ml-1">
                  Signup
                </a>
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
