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
        let result = await postApi('api/user/login', body);
        console.log("RESULT", result);
        if (result) {
            localStorage.setItem('token', result.token);
            console.log("ROLE", result.user.role);
            let role = result.user.role;
            // switch (result.user.role) {

            //     case 0:
            //         console.log("I AM HERE")
            //         navigation.replace('/etudiant');
            //     case 1:
            //         navigation.replace('/admin');
            //     case 2:
            //         navigation.replace('/formateur');
            // }
            if (role === 0) {
                navigation.replace('/etudiant');
            } else if (role === 1) {
                navigation.replace('/admin');
            } else {
                navigation.replace('/formateur');
            }
            dispatch(loginUserSuccess(result));

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

        let result = await postApi('api/user/register', body);
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

export const resetPasswordApi = (body) => async dispatch => {

    try {
        let result = await postApi('api/user/forgot', body);
        console.log("RESULT", result);
        if (result) {
            Swal.fire({
                title: 'Success',
                icon: 'success',
                'text': 'Un email de récupération à été envoyé veuillez verifier !'
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