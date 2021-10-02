import { getApi, postApi, removeApi, updateApi } from "../../utils/apiHelpers"
import { GET_ALL_QUESTIONS, UPDATE_QUESTION } from "../actionTypes"

const getAllQuestions = (data) => {

    return {
        type: GET_ALL_QUESTIONS,
        payload: data
    }
}

export const getAllQuestionsApi = (course) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('api/questions/' + course, config);
        if (result.success) {
            console.log("RESULT", result);
            dispatch(getAllQuestions(result.result))
        }
    } catch (error) {

    }

}
export const editQuestion = (data) => {
    return {
        type: UPDATE_QUESTION,
        payload: data
    }
}

export const addNewQuestionApi = (body, course) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await postApi('api/questions/add', body, config);
        if (result.success) {
            dispatch(getAllQuestionsApi(course));
        }
    } catch (error) {

    }
}
export const deleteQuestionApi = (id, course) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await removeApi('api/questions/' + id, config);
        if (result.success) {
            console.log("RESULT", result);
            dispatch(getAllQuestionsApi(course));
        }
    } catch (error) {

    }

}
export const updatQuestionApi = (id, body, course) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await updateApi('api/questions/' + id, body, config);
        if (result.success) {
            console.log("RESULT", result);
            dispatch(getAllQuestionsApi(course));
        }
    } catch (error) {

    }

}