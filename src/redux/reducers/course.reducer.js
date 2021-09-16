import { ADD_COURSE, GET_COURSE_LIST, GET_COURSE_LIST_SUCCESS } from "../actionTypes";

const courseInitState = {
    loading: false,
    courseList: []
}

const courseReducer = (state = courseInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_COURSE:

            return { ...state, loading: true }
        case GET_COURSE_LIST:
            return { ...state, loading: true }
        case GET_COURSE_LIST_SUCCESS:
            return { ...state, loading: false, courseList: payload }

        default:
            return state
    }


}

export default courseReducer;