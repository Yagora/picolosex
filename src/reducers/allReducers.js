import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import reducerQuestion from './reducerQuestion.js';

const allReducers = combineReducers({
    question: reducerQuestion,
    form: formReducer,
});

export default allReducers;
