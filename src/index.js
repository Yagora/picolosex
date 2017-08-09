//node_modules
import React from 'react';
import ReactDOM from 'react-dom';
//services
import registerServiceWorker from './services/registerServiceWorker';
//components
import App from './components/App';
//other
import './styles/App.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
