import React, { useState } from 'react'
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCourseDetailsApi } from '../redux/actions/course.details.actions';
import { addNewQuestionApi, updatQuestionApi } from '../redux/actions/questions.actions';

const EditCourseQuestion = ({ show, close }) => {
    const [title, setTitle] = useState("");
    const [rightAnswer, setRightAnswer] = useState('');
    const [score, setScore] = useState(0);
    const dispatch = useDispatch();
    const { selectedCourse } = useSelector((state) => state.detailsCourse);
    const { selectedQuestion } = useSelector((state) => state.questions);
    useEffect(() => {
        setTitle(selectedQuestion.title ? selectedQuestion.title : "");
        setRightAnswer(selectedQuestion.rightAnswer ? selectedQuestion.rightAnswer : "");
        setScore(selectedQuestion.score ? selectedQuestion.score : 0);
        setOptionList(selectedQuestion.options ? selectedQuestion.options : []);

    }, [selectedQuestion,selectedCourse])
    const handleAddData = () => {
        let body = {
            "title": title,
            "Course": selectedCourse._id,
            "options": optionList,
            "rightAnswer": rightAnswer,
            "score": score
        }

        dispatch(updatQuestionApi(selectedQuestion._id,body, selectedCourse));
        close();
        clearData();
    }
    const clearData = () => {
        setTitle("");
        setRightAnswer("");
        setScore("")
        setOption([])
    }
    const [optionList, setOptionList] = useState([]);
    const [option, setOption] = useState('');
    const handleAddOption = () => {
        let newList = [...optionList, option];
        setOptionList(newList);
        setOption('');
    }
    const handleDeleteOption = (index) => {
        let newList = optionList.filter((elm, ind) => ind !== index);
        setOptionList(newList);
    }
    const displayList = (elm, ind) => {


        return (<Fragment>

            <li class="border-gray-400 flex flex-row mb-2">
                <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" class="block relative">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div class="flex-1 pl-1 md:mr-16">
                        <div class="font-medium dark:text-white">
                            {elm}
                        </div>

                    </div>

                    <button class="w-24 text-right flex justify-end" onClick={() => {
                        handleDeleteOption(ind);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </li>
        </Fragment>)
    }
    return (
        <div>

            <div className={`fixed z-10 inset-0 overflow-y-auto ${!show ? 'hidden' : ''} `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Ajouter une question
                                    </h3>
                                    <div className="mt-2">
                                        <input type="text" value={title} multiple name="content" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Question" onChange={(event) => {
                                            setTitle(event.target.value);
                                        }} />


                                    </div>
                                    <div className="mt-2">
                                        <input type="number" value={score} multiple name="content" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Score" onChange={(event) => {
                                            setScore(event.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-2">
                                        <input type="text" value={rightAnswer} multiple name="content" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Reponse Correcte" onChange={(event) => {
                                            setRightAnswer(event.target.value);
                                        }} />
                                    </div>
                                    <div className="mt-2 flex justify-center flex-1">
                                        <input type="text" value={option} multiple name="content" id="rounded-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Option " onChange={(event) => {
                                            setOption(event.target.value);
                                        }} />
                                        <button style={{ maxWidth: '5em' }} onClick={handleAddOption} type="button" className="py-2 mx-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " >
                                            Ajouter
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <ul className="flex flex-col">
                                            {
                                                optionList.map((elm, ind) => displayList(elm, ind))
                                            }
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleAddData}>
                                Ajouter
                            </button>
                            <button onClick={() => {
                                close();
                            }} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCourseQuestion;
