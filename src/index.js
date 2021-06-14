import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';

// import Provider to make store available in App
import {Provider} from 'react-redux';

// import logger
import logger from 'redux-logger'

// reducer to hold the feedback data
const feedbackReducer = (state = {}, action) => {

    // switch operator will build the feedback
    // object based on action type
    switch(action.type){
        case 'COMMENT' :
            return {comment: action.payload, ...state};
        case 'SUPPORT' :
            return {support: action.payload, ...state};
        case 'UNDERSTANDING' :
            return {understanding: action.payload, ...state};
        case 'FEELING' :
            return {feeling: action.payload, ...state};
        default :
            return state;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
