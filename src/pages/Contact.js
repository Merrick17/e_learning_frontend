import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import contactImg from "../assets/img/question.svg";
import { addNewComment } from "../redux/actions/comments.actions";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    return (
        <section className="flex flex-col items-center h-screen md:flex-row m-5">
            <div className="relative hidden w-full h-screen bg-blueGray-400 lg:block md:w-1/3 xl:w-1/3">
                <img
                    src={contactImg}
                    alt
                    className="absolute object-contain w-full h-full"
                />
            </div>

            <div className="flex w-full h-screen px-6 bg-whitelack md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
                <div className="w-full py-32 lg:py-6 lg:h-100">
                    <h1 className="my-12 font-black tracking-tighter text-black 2xl sm:text-5xl title-font">
                        Nous Contacter.
                    </h1>
                    <div className="flex justify-enter" />
                    <form className="mt-6">
                        <div>
                            <label className="text-base font-medium leading-relaxed text-blueGray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name
                                id
                                placeholder="Your Email "
                                className="w-full px-4 py-2 mt-2 text-base text-blue-700 border-transparent rounded-lg bg-blueGray-100 ext-blue-700 focus:border-blueGray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}

                            />
                        </div>
                        <div className="mt-6">
                            <label className="text-base font-medium leading-relaxed text-blueGray-700">
                                Nom & Prénom
                            </label>
                            <input
                                type="text"
                                name
                                id
                                placeholder="Votre Nom"
                                className="w-full px-4 py-2 mt-2 text-base text-blue-700 border-transparent rounded-lg bg-blueGray-100 ext-blue-700 focus:border-blueGray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}


                            />
                        </div>
                        <div className="mt-6">
                            <label className="text-base font-medium leading-relaxed text-blueGray-700">
                                Commentaire
                            </label>
                            <textarea className="w-full border-gray-300 px-4 py-2 mt-2 text-base text-blue-700 border-transparent rounded-lg bg-blueGray-100 ext-blue-700 focus:border-blueGray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40"
                                value={comment}
                                onChange={(event) => {
                                    setComment(event.target.value)
                                }}
                            >
                            </textarea>
                        </div>


                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(addNewComment({
                                    email: email,
                                    fullName: name,
                                    comment: comment
                                }))
                            }}

                            className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
