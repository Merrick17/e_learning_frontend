import Swal from "sweetalert2"
import { postApi } from "../../utils/apiHelpers"
import { LOGIN_USER, LOGIN_USER_SUCCESS } from "../actionTypes"

const loginUser = () => {
    return {
        type: LOGIN_USER,

    }
}

const loginUserSuccess = (data) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: data
    }
}
export const loginUserApi = (body, navigation) => async dispatch => {
    try {
        dispatch(loginUser())
        let result = await postApi('user/login', body);
        console.log("RESULT", result);
        if (result) {
            localStorage.setItem('token', result.token);
            dispatch(loginUserSuccess(result));
            navigation.replace('/admin');
        } else {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                'text': 'Adresse ou mot de passe incorrect'
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            icon: 'error',
            'text': error.message
        })
    }
}
export const registerUserApi = (body) => async dispatch => {
    try {

        let result = await postApi('user/register', body);
        console.log("RESULT", result);
        if (result) {
            Swal.fire({
                title: 'Success',
                icon: 'success',
                'text': 'Vous etes bien enregistrer veuillez vous connectez!'
            })

        } else {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                'text': 'Adresse ou mot de passe incorrect'
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            icon: 'error',
            'text': error.message
        })
    }
}