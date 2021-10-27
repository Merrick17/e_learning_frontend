import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserApi } from '../redux/actions/user.actions';
import { useForm } from "react-hook-form";
import { addCourseApi } from '../redux/actions/course.actions';
import { useEffect } from 'react';
const AddCourseModal = ({ show, closeModal }) => {

    const dispatch = useDispatch();
    const categoryState = useSelector((state) => state.category)
    const userState = useSelector((state) => state.users)
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [Instructor, setInscructor] = useState('');
    const [categ, setSetCateg] = useState('');
    const [price, setPrice] = useState(0);
    useEffect(() => {
        let list = userState.list.filter(elm => elm.role === 2);
        setInscructor(list[0] ? list[0]._id : "");
        setSetCateg(categoryState.list[0] ? categoryState.list[0]._id : "");
    }, [userState, categoryState])
    const getInstructorList = () => {
        let list = userState.list.filter(elm => elm.role === 2);
        return list.map((elm) => {
            return <option value={elm._id}>{elm.name}</option>
        })
    }
    const confirmAdd = () => {
        // title, desc, Instructor, category, price 
        let formData = new FormData();
        formData.append('courseImage', img);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('Instructor', Instructor);
        formData.append('category', categ);
        formData.append('price', price);
        dispatch(addCourseApi(formData));

        closeModal();
    }
    return (
        <div>
            <div className={`fixed z-10 inset-0 overflow-y-auto ${!show ? 'hidden' : ''} `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>


                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    {/* Heroicon name: outline/exclamation */}
                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Ajouter un nouveau cours
                                    </h3>
                                    <div className="mt-5">
                                        <div className="flex flex-col justify-items-center items-center">

                                            <div className=" relative mb-2 ">
                                                <input type="text" name="title" value={title} onChange={(event) => {
                                                    setTitle(event.target.value)
                                                }} id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Titre" />
                                            </div>
                                            <div className=" relative mb-2">
                                                <textarea type="text" value={desc} onChange={(event) => {
                                                    setDesc(event.target.value)
                                                }} name="desc" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Déscription" />
                                            </div>

                                            <div className=" relative mb-2">
                                                <input type="number" name="price" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Prix" onChange={(event) => {
                                                    setPrice(event.target.value)
                                                }} />
                                            </div>
                                            <div className=" relative mb-2">
                                                <input type="file" name="courseImage" onChange={(event) => {
                                                    setImg(event.target.files[0])
                                                }} id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Prix" />
                                            </div>
                                            <div className=" relative mb-2 flex justify-items-center items-center" >
                                                <label htmlFor="id_role " className="mr-6">Instructeur:</label>
                                                <select name="role" onChange={(event) => {
                                                    setInscructor(event.target.value)
                                                }} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" >
                                                    {
                                                        // userState.list.map((elm) => {
                                                        //     return <option value={elm._id}>{elm.name}</option>
                                                        // })
                                                        getInstructorList()
                                                    }

                                                </select>
                                            </div>
                                            <div className=" relative mb-2 flex justify-items-center items-center" >
                                                <label htmlFor="id_role " className="mr-6">Categorie:</label>
                                                <select name="role" onChange={(event) => {
                                                    setSetCateg(event.target.value)
                                                }} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" >
                                                    {
                                                        categoryState.list.map((elm) => {
                                                            return <option value={elm._id}>{elm.name}</option>
                                                        })

                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={confirmAdd}>
                                Confirmer
                            </button>
                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AddCourseModal
