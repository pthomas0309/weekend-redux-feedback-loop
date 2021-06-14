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
import logger from 'redux-logger';

// reducer to hold the feedback data
const feedbackReducer = (state = {feeling: '5', understanding: '5', support: '5', comment: 'placeholder'}, action) => {
    console.log('feedbackReducer', state);
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
    };
};

const store = createStore(
    combineReducers({feedbackReducer}), 
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
