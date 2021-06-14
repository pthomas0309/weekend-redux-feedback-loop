import React from 'react';
import axios from 'axios';
import './App.css';
import Review from '../Review/Review'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* Feedback Form component for each page of inputs */}
      <FeedbackForm feedbackPage="feeling" />
      <FeedbackForm feedbackPage="understanding" />
      <FeedbackForm feedbackPage="support" />
      <FeedbackForm feedbackPage="comment" />

      {/* Component for the feedback review */}
      <Review />

    </div>
  );
}

export default App;
