import {combineReducers} from 'redux';

import reducerQuestion from './reducerQuestion.js';

const allReducers = combineReducers({
    question: reducerQuestion
});

export default allReducers;
