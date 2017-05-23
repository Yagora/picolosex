//node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
//services
import registerServiceWorker from './services/registerServiceWorker';
//components
import allReducers from './reducers/allReducers.js'
import App from './components/App';
//other
import './styles/App.css';



const appStore = createStore(allReducers);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
