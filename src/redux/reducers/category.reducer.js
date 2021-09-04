import { ADD_CATEGORY, GET_CATEGORY, GET_CATEGORY_SUCCESS, UPDATE_CATEGORY } from "../actionTypes";

const categoryInitState = {
    loading: false,
    list: [],
    selectedCategory: {}
}

const categoryReducer = (state = categoryInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_CATEGORY:
            return { ...state, loading: true }
        case GET_CATEGORY:
            return { ...state, loading: true }
        case GET_CATEGORY_SUCCESS:
            return { ...state, loading: false, list: payload }
        case UPDATE_CATEGORY:
            return { ...state, selectedCategory: payload }

        default:
            return state;
    }
}
export default categoryReducer ; 