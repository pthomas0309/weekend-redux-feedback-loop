import React from 'react';
import axios from 'axios';
import './App.css';
import Review from '../Review/Review'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

// bring in router and route functionality
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {

  // getFeedback handles the API 
  // call to the server
  const getFeedback = () => {

    // axios GET to /feedback
    axios.get('/feedback')

    // async brings back a response
    .then(response => {
      console.log(response.data);

      //dispatch the data to the reducer
      /* dispatch({
        type: 'COLLECT_FEEDBACK'
        payload: response.data
      }) */

    })

    // catch error
    .catch(err => {
      console.log('Issue bringing back response', err);
    })
  };

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        {/* Feedback Form component for each page of inputs */}
        <Route path='/' exact >
          <FeedbackForm feedbackPage="feeling" />
        </Route>

        <Route path='/understanding' >
          <FeedbackForm feedbackPage="understanding" />
        </Route>

        <Route path='/support' >
          <FeedbackForm feedbackPage="support" />
        </Route>

        <Route path='/comment' >
          <FeedbackForm feedbackPage="comment" />
        </Route>

        {/* Component for the feedback review */}
        <Route path='/review' >
          <Review />
        </Route>

        <Route path="/success">
          <Success />
        </Route>

      </div>
    </Router>
  );
}

export default App;
