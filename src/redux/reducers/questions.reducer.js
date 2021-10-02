import { ANSWER_QUESTION, GET_ALL_QUESTIONS, UPDATE_QUESTION } from "../actionTypes";

const questionInitState = {
    list: [],
    loading: false,
    selectedQuestion: {},
    editQuestions: []
}

const questionReducer = (state = questionInitState, action) => {

    let { type, payload } = action;

    switch (type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state, loading: false, list: payload, editQuestions: [payload[0]]
            }

        case UPDATE_QUESTION:
            return { ...state, selectedQuestion: payload }
        case 'ADD_NEW_QUESTION':
            return { ...state, editQuestions: [...state.editQuestions, payload] }
        case ANSWER_QUESTION:
            return { ...state, editQuestions: payload }

        default:
            return state;
    }


}


export default questionReducer;