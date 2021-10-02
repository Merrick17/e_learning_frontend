import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import AddCourseDetails from '../../components/AddCourseDetails';
import { getCourseByUser } from '../../redux/actions/course.actions';
import { getCourseDetailsApi } from '../../redux/actions/course.details.actions';
import { BASE_URL } from '../../utils/apiHelpers'
const MyCourse = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);
    const { courseList } = useSelector((state) => state.courses);
    const { courseDetails } = useSelector((state) => state.detailsCourse)
    const [selectedCourse, setSelectedCourse] = useState('');
    const history = useHistory();


    return (
        <div className="w-full h-full container flex flex-col">

            <div className="flex flex-row w-full h-25 justify-start justify-items-center py-6">

                <div className="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
                    <div>
                        <span className="text-bold text-gray-700 dark:text-gray-400 block">
                            Cours
                        </span>
                        <select value={selectedCourse} onChange={(event) => {
                            setSelectedCourse(event.target.value);

                        }} className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option selected={true}>
                                Selectionner un cours
                            </option>)
                            {
                                userData && userData.subscribedCourses && userData.subscribedCourses.map((elm) => <option value={elm._id}>
                                    {elm.title}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="self-end">
                        <div className="md:text-right text-left md:block">
                            <button onClick={() => {
                                dispatch(getCourseDetailsApi(selectedCourse));
                            }} style={{ maxWidth: '16em' }} type="button" className="py-2 mx-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " >
                                Afficher details
                            </button>
                        </div>

                    </div>
                    <div className="self-end">
                        {
                            selectedCourse && <div className="md:text-right text-left md:block">
                                <button style={{ maxWidth: '16em' }} onClick={
                                    () => {
                                        history.push('/etudiant/exam/' + selectedCourse)
                                    }
                                } type="button" className="py-2 mx-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " >
                                    Passer le test
                                </button>
                            </div>
                        }

                    </div>
                </div>



            </div>

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nom du Cours
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Type de document
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Afficher
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        courseDetails && courseDetails.content &&
                                        courseDetails.content.map((elm) => <tr key={elm._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">

                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {courseDetails.course.title}
                                                        </div>
                                                        <div className="text-sm text-gray-500">

                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">

                                                <img className="h-10 w-10 rounded-full" src={`${BASE_URL}/${courseDetails.course.courseImage}`} />

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {elm.itemFile}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex ">
                                                <a href={`${BASE_URL}/${elm.itemType}`} target="_blank" type="button" className="py-2 mx-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-1/2 h-12 rounded-lg " onClick={() => {

                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </a>


                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourse
