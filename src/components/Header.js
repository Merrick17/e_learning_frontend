import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem('token');
    return (
        <div className="container items-center ">
            <div className="items-center justify-between w-full px-5 overflow-y-auto tflex whitespace-nowrap scroll-hidden ">
                <div className="flex flex-col flex-wrap mx-auto md:items-center md:flex-row">
                    <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                        <div className="inline-flex items-center">
                            <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                            </div>
                            <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> CAPDEV </h2>
                        </div>
                    </a>
                    <nav className="flex flex-wrap items-center justify-start text-base ">
                        <ul className="items-center inline-block list-none lg:inline-flex">
                            <li>
                                <Link to="/" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">FORMATIONS</Link>
                            </li>
                            <li>
                                <Link to="/" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">CONTACT</Link>
                            </li>
                            {
                                !token && <li>
                                    <Link to="/login" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">CONNEXION</Link>
                                </li>
                            }

                        </ul>
                    </nav>

                </div>
            </div>
        </div>

    )
}

export default Header
