import { ADD_CATEGORY, GET_CATEGORY, GET_CATEGORY_SUCCESS, UPDATE_CATEGORY } from '../actionTypes/index'
import { getApi, postApi, removeApi, updateApi } from '../../utils/apiHelpers'
export const addCategory = () => {
    return {
        type: ADD_CATEGORY
    }
}

export const getCategory = () => {
    return {
        type: GET_CATEGORY
    }
}

export const getCategorySuccess = (data) => {
    return {
        type: GET_CATEGORY_SUCCESS,
        payload: data

    }
}
export const updateCategory = (data) => {
    return {
        type: UPDATE_CATEGORY,
        payload: data
    }
}

export const getCategoriesApi = () => async dispatch => {

    try {
        dispatch(getCategory());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('api/category', config);
        dispatch(getCategorySuccess(result));
    } catch (error) {
        console.log("ERROR", error.message)
    }
}

export const addCategApi = (body) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addCategory());
        let result = await postApi('api/category', body, config);
        if (result) {
            dispatch(getCategoriesApi());
        }
    } catch (error) {

    }
}
export const deleteCategory = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addCategory());
        let result = await removeApi('api/category/' + id, config);
        if (result) {
            dispatch(getCategoriesApi());
        }
    } catch (error) {

    }

}
export const updateCategApi = (body, id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        let result = await updateApi('api/category/' + id, body, config);
        if (result) {
            dispatch(getCategoriesApi());
        }
    } catch (error) {

    }
}