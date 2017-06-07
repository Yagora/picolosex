import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import userReducer from './userReducer.js';
import reducerQuestion from './questionReducer.js';

const allReducers = combineReducers({
    users: userReducer,
    question: reducerQuestion,
    form: formReducer,
});

export default allReducers;
