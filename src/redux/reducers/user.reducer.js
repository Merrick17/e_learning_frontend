import { ADD_USER, ADD_USER_SUCCESS, GET_USERS, GET_USERS_SUCCESS, UPDATE_USER } from "../actionTypes";

const userInitState = {
    list: [],
    loading: false,
    selectedUser: {}
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
        case UPDATE_USER:
            return { ...state, selectedUser: payload }

        default:
            return state;
    }

}

export default userReducer;

