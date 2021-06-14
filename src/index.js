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
const feedbackReducer = (state = {feeling: '', understanding: '', support: '', comment: ''}, action) => {
    console.log('feedbackReducer', state);
    // switch operator will build the feedback
    // object based on action type
    switch(action.type){
        case 'COMMENT' :
            return {...state, comment: action.payload};
        case 'SUPPORT' :
            return {...state, support: action.payload};
        case 'UNDERSTANDING' :
            return {...state, understanding: action.payload};
        case 'FEELING' :
            return {...state, feeling: action.payload};
        case 'RESET' : 
            return {feeling: '', understanding: '', support: '', comment: ''}
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
