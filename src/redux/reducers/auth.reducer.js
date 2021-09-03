import { LOGIN_USER, LOGIN_USER_SUCCESS } from "../actionTypes";

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

        default:
            return state;
    }

}



export default authReducer;