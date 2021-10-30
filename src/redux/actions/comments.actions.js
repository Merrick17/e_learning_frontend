import { getApi, postApi } from "../../utils/apiHelpers"
import { GET_ALL_COMMENTS } from "../actionTypes";


export const getCommentList = () => async dispatch => {
    try {
        let result = await getApi('api/comments');
        if (result.success) {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: result.result
            })
        }
    } catch (error) {

    }
}
export const addNewComment =  (body) => async dispatch => {
    try {
        let result = await postApi('api/comments/add', body);
        if (result) {
            dispatch(getCommentList())
        }
    } catch (error) {

    }

}