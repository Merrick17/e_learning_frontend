import {GET_DETAILS,GET_DETAILS_SUCCESS} from '../actionTypes/index'
const courseDetailsInitState = {
    selectedCourse: "",
    courseDetails: [],
    loading: false

}

const courseDetailsReducer = (state = courseDetailsInitState, action) => {

    let { type,payload} = action;
    switch (type) {
        case GET_DETAILS:
            
            return { ...state, loading: true ,selectedCourse:payload}
            case GET_DETAILS_SUCCESS:
            
            return { ...state, loading: false ,courseDetails:payload}
    
        default:
            return state ; 
    }

}

export default courseDetailsReducer;