import { getApi, postApi, removeApi, updateApi } from "../../utils/apiHelpers"
import { ADD_COURSE, DELETE_COURSE, GET_COURSE_LIST, GET_COURSE_LIST_SUCCESS, UPDATE_COURSE } from "../actionTypes"

const getCourseList = () => {
    return { type: GET_COURSE_LIST }
}

const getCourseListSuccess = (data) => {
    return {
        type: GET_COURSE_LIST_SUCCESS,
        payload: data
    }
}

export const getCourseApi = () => async dispatch => {

    try {
        dispatch(getCourseList())
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('api/course', config)
        if (result.success) {
            dispatch(getCourseListSuccess(result.result))
        }
        console.log(result);
    } catch (error) {

    }
}
const addCourse = () => {
    return {
        type: ADD_COURSE
    }
}
export const addCourseApi = (body) => async dispatch => {
    try {
        dispatch(addCourse());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await postApi('api/course/addcourse', body, config);
        if (result.success) {
            dispatch(getCourseApi());
        }
    } catch (error) {

    }
}
export const editCourseApi = (body, id) => async dispatch => {
    try {
        dispatch(addCourse());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await updateApi('api/course/editcourse/' + id, body, config);
        if (result.success) {
            dispatch(getCourseApi());
        }
    } catch (error) {

    }
}
const deleteCourse = () => {
    return {
        type: DELETE_COURSE
    }
}
export const deleteCourseApi = (id) => async dispatch => {
    try {
        dispatch(deleteCourse());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await removeApi('api/course/' + id, config);
        if (result.success) {
            dispatch(getCourseApi());
        }
    } catch (error) {

    }
}

export const getCourseByUser = (id) => async dispatch => {
    try {
        dispatch(getCourseList())
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('api/course/teacher/' + id, config)
        if (result.success) {
            dispatch(getCourseListSuccess(result.result))
        }
        console.log(result);
    } catch (error) {

    }
}

export const updateCourse = (elm) => {
    return {
        type: UPDATE_COURSE,
        payload: elm
    }
}