import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // local state to hold the feedback stored in the database
  const [feedbackList, setFeedbackList] = useState([]);

  // on page load run the API call
  useEffect(() => {
    getFeedback()
  },[]);

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
    </div>
  );
}

export default App;
