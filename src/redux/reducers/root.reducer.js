import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';
import courseDetailsReducer from './course.details.reducer';
import courseReducer from './course.reducer';
import questionReducer from './questions.reducer';
import userReducer from './user.reducer';
import commentReducer from './comments.reducer';
const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    category: categoryReducer,
    courses: courseReducer,
    detailsCourse: courseDetailsReducer,
    questions: questionReducer,
    comment: commentReducer
});

export default rootReducer;