import { LOGIN_USER, LOGIN_USER_SUCCESS, UPDATE_USER_CART } from "../actionTypes";

const authState = {
    token: '',
    userData: {},
    loading: false
}

const authReducer = (state = authState, action) => {
    let { type, payload } = action;
    switch (type) {
        case LOGIN_USER:

            return { ...state, loading: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, token: payload.token, userData: payload.user }
        case UPDATE_USER_CART:
            return { ...state, userData: payload }

        default:
            return state;
    }

}



export default authReducer;