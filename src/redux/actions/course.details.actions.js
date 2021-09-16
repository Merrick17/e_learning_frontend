import { getApi, postApi } from "../../utils/apiHelpers"
import { ADD_COURSE, GET_DETAILS, GET_DETAILS_SUCCESS } from "../actionTypes"

export const addCourseDetais = () => {
    return {
        type: ADD_COURSE
    }
}

export const addCourseDetailsApi = (courseId, data) => async dispatch => {
    try {
        dispatch(addCourseDetais());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await postApi('api/details/add', data, config);
        if (result) {
            dispatch(getCourseDetailsApi(courseId)) ; 
        }
    } catch (error) {

    }
}


export const getCourseDetails = (courseId) => {
    return {
        type: GET_DETAILS, 
        payload:courseId
    }
}
export const getCourseDetailsSuccess = (payload) => {
    return {
        type: GET_DETAILS_SUCCESS,
        payload: payload
    }
}
export const getCourseDetailsApi = (courseId) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(getCourseDetails(courseId));
        let result = await getApi('api/details/' + courseId, config);
        if (result.success) {
            console.log("RESULT DETAILS", result);
            if(result.details==null)
            {
                dispatch(getCourseDetailsSuccess([]));
            }else 
            {
                dispatch(getCourseDetailsSuccess(result.details));
            }
            
        }

    } catch (err) {

    }
}