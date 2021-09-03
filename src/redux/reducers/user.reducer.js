import { ADD_USER, ADD_USER_SUCCESS, GET_USERS, GET_USERS_SUCCESS } from "../actionTypes";

const userInitState = {
    list: [],
    loading: false,
}

const userReducer = (state = userInitState, action) => {

    let { type, payload } = action;
    switch (type) {
        case ADD_USER:
            return { ...state, loading: true }
        case ADD_USER_SUCCESS:
            return { ...state, loading: false }
        case GET_USERS:
            return { ...state, loading: true }
        case GET_USERS_SUCCESS:
            return { ...state, loading: false, list: payload }

        default:
            return state;
    }

}

export default userReducer;

