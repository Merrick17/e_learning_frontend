import Swal from "sweetalert2"
import { getApi, postApi, removeApi, updateApi } from "../../utils/apiHelpers"
import { ADD_USER, ADD_USER_SUCCESS, GET_USERS, GET_USERS_SUCCESS, UPDATE_USER, UPDATE_USER_CART } from "../actionTypes"

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

const updateUserData = (data) => {
    return {
        type: UPDATE_USER_CART,
        payload: data
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
        let result = await getApi('api/user/list', config);
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
        let result = await removeApi('api/user/delete/' + id, config);
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
        let result = await postApi('api/user/addnewuser', data);
        console.log("RESULT", result);
        dispatch(addUserSuccess());
        dispatch(getUserListApi());
    } catch (error) {

    }
}
export const editUserApi = (data, id) => async dispatch => {
    try {
        let { role, email, name } = data;
        let body = {
            role: Number(role),
            email: email, name: name
        }
        dispatch(addUser());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await postApi('api/user/update/' + id, body, config);
        console.log("RESULT", result);
        dispatch(addUserSuccess());
        dispatch(getUserListApi());
    } catch (error) {

    }
}
export const addToCart = (id, data) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await updateApi('api/user/addtocart/' + id, data, config);
        dispatch(getUserCart(id));
        Swal.fire(
            'Success!',
            'Cours ajouté à votre panier!',
            'success'
        )

    } catch (error) {

    }
}

export const getUserCart = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('api/user/cart/' + id, config);
        dispatch({
            type: UPDATE_USER_CART,
            payload: result.result
        });
        console.log("RESULT", result);
    } catch (error) {

    }
}

export const deleteItemFromCart = (id, courseId) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await removeApi(`api/user/deletecart/${id}/${courseId}`, config);
        dispatch(getUserCart(id));
        console.log("RESULT", result);
    } catch (error) {

    }
}

export const updateUserPasswordApi = (id, newPassword) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await updateApi('api/user/updatepwd/' + id, {
            password: newPassword
        }, config);
        if (result) {
            dispatch(getUserCart(id));
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Mot de passe est modifié avec success'

            })
        }
    } catch (error) {

    }
}
export const updateUserNameApi = (id, newName) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await updateApi('api/user/updatename/' + id, {
            name: newName
        }, config);
        if (result) {
            dispatch(getUserCart(id));
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Nom est modifié avec success'

            })
        }
    } catch (error) {

    }
}
export const confirmPayment = (id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi(`api/user/confirm/${id}`, config);
        dispatch(getUserCart(id));
        console.log("RESULT", result);
    } catch (error) {

    }
}
