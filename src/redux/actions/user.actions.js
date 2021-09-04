import { getApi, postApi, removeApi } from "../../utils/apiHelpers"
import { ADD_USER, ADD_USER_SUCCESS, GET_USERS, GET_USERS_SUCCESS, UPDATE_USER } from "../actionTypes"

const addUser = () => {
    return {
        type: ADD_USER
    }
}

const addUserSuccess = () => {
    return {
        type: ADD_USER_SUCCESS
    }
}
const getUsersList = () => {
    return {
        type: GET_USERS
    }
}

const getUsersListSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}
export const editUser = (payload) => {
    return {
        type: UPDATE_USER,
        payload: payload
    }
}

export const getUserListApi = () => async dispatch => {
    try {
        dispatch(getUsersList());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('user/list', config);
        if (result && result.success) {
            dispatch(getUsersListSuccess(result.result))
        }
        console.log("REsult", result);
    } catch (error) {

    }
}
export const deleteUserApi = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await removeApi('user/delete/' + id, config);
        console.log(result);
        if (result) {
            dispatch(getUserListApi());
        }
    } catch (error) {

    }
}
export const addUserApi = (data) => async dispatch => {
    try {
        dispatch(addUser());
        let result = await postApi('user/addnewuser', data);
        console.log("RESULT", result);
        dispatch(addUserSuccess());
    } catch (error) {

    }
}
