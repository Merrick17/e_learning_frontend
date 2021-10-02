import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseApi } from '../../redux/actions/course.actions';
import { BASE_URL } from '../../utils/apiHelpers';
import Swal from 'sweetalert2';
import { addToCart } from '../../redux/actions/user.actions';
const CourseList = () => {
    const dispatch = useDispatch();
    const { courseList } = useSelector((state) => state.courses);
    const { userData } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getCourseApi());
    }, []);
    return (
        <div>
            <section className="text-blueGray-700 ">
                <div className="container items-center px-5 py-8 mx-auto lg:px-24">
                    <div className="flex flex-wrap mb-12 text-left">
                        {courseList.map(elm => {
                            return (<div className="shadow-lg rounded-2xl  bg-white w-64 m-auto p-2">
                                <img src={`${BASE_URL}/${elm.courseImage
                                    }`} alt="adidas" className="w-32 p-4 h-36 m-auto" />
                                <div className="bg-blue-200 m-3 p-4 rounded-lg">
                                    <p className="text-white text-xl font-bold ">
                                        {elm.title}
                                    </p>
                                    <p className="text-gray-50 text-xs">
                                        {elm.desc}
                                    </p>
                                    <div className="flex items-center justify-between ">
                                        <p className="text-white">
                                            {elm.price}
                                        </p>
                                        <button type="button" className="w-10 h-10 text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-700" onClick={() => {
                                            dispatch(addToCart(userData._id, {
                                                course: elm._id
                                            }))
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mx-auto" fill="white" viewBox="0 0 1792 1792">
                                                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CourseList
