import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValues } from "../Utils/Provider";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import axios from "axios";


const Login = () => {
  const [{ abc }, dispatch] = useStateValues();
  if (abc) { }
  const [Loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    await axios.post(`${process.env.REACT_APP_ENDPOINT}/api/v1/login`, { email: formData.email, password: formData.password })
      .then((response) => {
        dispatch({
          type: "SET_USER",
          user: response.data.user
        })
        localStorage.setItem('todo_user', JSON.stringify(response.data.user));
        setLoading(false);
        navigate('/');
      }
      )
      .catch((e) => { console.log(e) })
    setLoading(false);
  };


  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='sm:w-[80vw] w-[100vw] md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-3 md:gap-y-10 2xl:-mt-20'>
            <p className='flex flex-col py-3 text-3xl gap-0 md:gap-4 md:text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
              Manage all your task in one place!
            </span>
          </div>
        </div>


        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit}
            className='shadow-4xl mx-auto rounded-[10px] w-full md:w-[400px] flex flex-col gap-y-7 bg-white px-10 pt-5 pb-14'
          >
            <div className="gap-3" >
              <p className='text-blue-600 text-2xl md:text-3xl font-bold text-center'>
                Welcome back!
              </p>
              <p className='text-center text-sm text-base text-gray-500 '>
                Keep all your credential safe.
              </p>
            </div>

            <div className='flex flex-col h-[13rem] gap-y-3'>
              <div className="flex flex-col gap-1 ">
                <label className="font-semibold text-gray-600">Email Address</label>
                <input
                  type='email'
                  placeholder='email@example.com'
                  className="w-full focus:outline-none pb-1 pl-1 border-b border-gray-900 "
                  name="email"
                  onChange={changeHandler}
                  value={formData.email}
                />
              </div>

              <div className="flex relative flex-col gap-1 my-2  ">
                <label className="font-semibold text-gray-600">Password</label>
                <input
                  type={show ? " text" : "password"}
                  placeholder='your password'
                  className="w-full  pb-1 pl-1 focus:outline-none  border-b border-gray-900 "
                  name='password'
                  onChange={changeHandler}
                  value={formData.password}
                />
                <div className="absolute right-1 bottom-[45%]">
                  {show ?
                    (<TbEyeClosed onClick={() => { setShow(!show) }} />) :
                    (<FaEye onClick={() => { setShow(!show) }} />)
                  }
                </div>
                <span className='text-sm mt-2 text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                  Forget Password?
                </span>
              </div>

              <button className="px-3 py-2 outline-none w-full h-10 bg-blue-700 text-white rounded-full" >
                <span>{Loading ? (<p className="text-gray-300 cursor-none">Loading...</p>) : ("Submit")}</span>
              </button>

              <p className="text-sm  mb-3 text-center ">
                Don&apos;t have an account?
                <Link
                  to="/signup"
                  className="text-[#877EFF] text-sm font-semibold ml-1">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;