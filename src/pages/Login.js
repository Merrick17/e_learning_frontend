import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import login from '../assets/img/education_04.svg'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { loginUserApi } from '../redux/actions/auth.actions';
import ResetPassword from '../components/ResetPasswordModal';
import { useState } from 'react';
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const onSubmit = data => {
    dispatch(loginUserApi(data, history));
  }
  const handleClose = () => {
    setShow(false);

  }
  const handleOpen = () => {
    setShow(true);
  }
  return (
    <section className="flex flex-col items-center h-screen md:flex-row ">
      <div className="relative hidden w-full h-screen bg-blueGray-400 lg:block md:w-1/3 xl:w-1/3">
        <img src={login} alt className="absolute object-contain w-full h-full" />

      </div>
      <ResetPassword show={show} closeModal={handleClose} />
      <div className="flex w-full h-screen px-6 bg-whitelack md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
        <div className="w-full py-32 lg:py-6 lg:h-100">
          <h1 className="my-12 font-black tracking-tighter text-black 2xl sm:text-5xl title-font">S'authentifier.</h1>
          <div className="flex justify-enter">
            <button type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" >
              <div className=" flex items-center justify-center ">

                <span className="ml-4"> Log in with Google </span>
              </div>
            </button>

          </div>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-base font-medium leading-relaxed text-blueGray-700">Email Address</label>
              <input type="email" name id placeholder="Your Email " className="w-full px-4 py-2 mt-2 text-base text-blue-700 border-transparent rounded-lg bg-blueGray-100 ext-blue-700 focus:border-blueGray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" {...register("email", { required: true, pattern: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' })} />
              {errors.email && <span className="text-red-500 mt-3">Veuillez saisir un email valid</span>}
            </div>
            <div className="mt-4">
              <label className="text-base font-medium leading-relaxed text-blueGray-700">Password</label>
              <input type="password" name id placeholder="Your Password" minLength={6} className="w-full px-4 py-2 mt-2 text-base text-blue-700 border-transparent rounded-lg bg-blueGray-100 ext-blue-700 focus:border-blueGray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"   {...register("password", { required: true })} />
              {errors.password && <span className="text-red-500 mt-3">Veuillez saisir un mot de passe valid</span>}
            </div>
            <div className="mt-2 text-right">
              <a onClick={(e)=>{
                e.preventDefault() ; 
                console.log("Helooo")
                handleOpen() ; 
              }} className="text-sm font-semibold leading-relaxed text-blueGray-700 hover:text-blue-700 focus:text-blue-700">Mot de passe oublié?</a>
            </div>
            <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black">Log In</button>
          </form>
          <p className="mt-8 text-center">Pas enroe inscrit? <Link to="/register" className="font-semibold text-blue-500 hover:text-blue-400">S'inscrire</Link></p>
        </div>
      </div>
    </section>


  )
}

export default Login
