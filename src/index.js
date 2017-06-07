//node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
//services
import registerServiceWorker from './services/registerServiceWorker';
//components
import allReducers from './reducers/allReducers.js'
import App from './components/App';
import SubmitRedirect from './components/SubmitRedirect';
//other
import './styles/App.css';

const appStore = createStore(allReducers);

ReactDOM.render(
    <Provider store={appStore}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/SubmitRedirect" component={SubmitRedirect} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
