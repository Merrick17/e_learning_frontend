import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { registerUserApi } from '../redux/actions/auth.actions';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(registerUserApi(data));
    }

    return (
        <section className="flex flex-col items-center h-screen md:flex-row">
            <div className="container mx-auto">
                <div className="flex justify-center px-2 py-6 ">
                    <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
                        <div className="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                            <div className="relative z-10 m-12 text-left ">
                                <a className="flex items-center w-32 mb-4 font-medium text-blueGray-900 title-font md:mb-10">
                                    <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600">
                                    </div>

                                </a>
                                <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> Create an account. </h2>
                                <div className="w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl "> All you have to do is choose the section you need, remove the one that you do not need for that project and paste the one you need in that moment. All the section have been given the same left/right padding. Because consistence is king. </div>
                            </div>
                        </div>
                        <div className="w-full px-8 py-24 bg-white rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                            <div className="relative z-10 text-left ">
                                <div className="flex justify-enter lg:py-6">
                                    <button type="button" className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                                <defs>
                                                    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                                </defs>
                                                <clipPath id="b">
                                                    <use xlinkHref="#a" overflow="visible" />
                                                </clipPath>
                                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                            </svg>
                                            <span className="ml-4"> Log in with Google </span>
                                        </div>
                                    </button>
                                    <button type="button" className="inline-flex px-4 py-3 ml-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black focus:bg-blueGray-100 hover:text-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                        <div className="flex items-center justify-center">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                                </path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className="block text-base font-medium leading-relaxed text-blueGray-700">Nom & Pr??nom</label>
                                        <input type="text" name id placeholder="Nom & Pr??nom" className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" {...register("name", { required: true })} />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-base font-medium leading-relaxed text-blueGray-700"> Addresse Email</label>
                                        <input type="email" name id placeholder="Your Email " className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" {...register("email", { required: true })} />
                                    </div>
                                    <div className="mt-4">

                                        <label className="text-base font-medium leading-relaxed text-blueGray-700" htmlFor="password" minLength={6}> Mot de passe </label>
                                        <input className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" id="password" type="password" placeholder="Mot de passe" {...register("password", { required: true })} />
                                        {/* <p className="mt-1 text-xs italic text-black">Please fill out this field.</p> */}


                                    </div>
                                    <button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black">S'inscrire</button>
                                </form>
                                <p className="mt-8 text-center">Vous avez d??ja un compte ? <Link to="/login" className="font-semibold text-black hover:text-black">Se connecter</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Register
