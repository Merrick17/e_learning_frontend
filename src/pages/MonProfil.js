import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { updateUserNameApi, updateUserPasswordApi } from '../redux/actions/user.actions';

const MonProfil = () => {
    const { userData } = useSelector((state) => state.auth);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        setName(userData.name);

    }, [])
    return (
        <div>

            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <div href="#" className="block relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h1 className="text-gray-600">
                                {userData.name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 bg-white">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Email
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" disabled value={userData.email} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-4/12">
                            Changer Nom
                        </h2>
                        <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                            <div className=" relative ">
                                <input type="text" id="user-info-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" value={name} onChange={(event) => {
                                    setName(event.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="text-center md:w-3/12 md:pl-6">
                            <button type="button" onClick={() => {
                                dispatch(updateUserNameApi(id, name));
                                
                            }} className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Changer
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-4/12">
                            Changer Mot de passe
                        </h2>
                        <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                            <div className=" relative ">
                                <input type="text" id="user-info-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" value={password} onChange={(event) => {
                                    setPassword(event.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="text-center md:w-3/12 md:pl-6">
                            <button type="button" onClick={() => {
                                dispatch(updateUserPasswordApi(id, password));
                                setPassword("");
                            }} className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Changer
                            </button>
                        </div>
                    </div>
                    <hr />
                    {/* <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Sauvegarder
                        </button>
                    </div> */}
                </div>
            </form>


        </div>
    )
}

export default MonProfil
