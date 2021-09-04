import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    category:categoryReducer
});

export default rootReducer;