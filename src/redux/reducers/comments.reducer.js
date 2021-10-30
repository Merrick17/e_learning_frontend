import { GET_ALL_COMMENTS } from "../actionTypes";

const initCommentState = {
    list: [],
    loading: false
}


const commentReducer = (state = initCommentState, action) => {

    let { payload, type } = action;
    switch (type) {
        case GET_ALL_COMMENTS:

            return { ...state, list: payload }

        default:
            return state;
    }
}

export default commentReducer;