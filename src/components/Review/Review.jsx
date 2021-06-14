// source useSelector
import axios from 'axios';
import {useSelector} from 'react-redux';

function Review() {

    // make the store accessible  in the component
    const feedback = useSelector(store => store.feedbackReducer);

    // submit feedback handles the API call to post
    const submitFeedback = () => {

        // axios handles POST
        axios.post('/feedback', feedback)

        // async brings a response (created)
        .then(response => {
            console.log(response.data, `feedback posted to database`);
        })

        // catch errors
        .catch(err => {
            console.log(`There was a problem posting the feedback to database`);
        });
    };

    console.log(feedback);
    return(
        <>
            <div>
                <h2><strong>Review Your Feedback</strong></h2>
                <p>Feeling: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comment: {feedback.comment}</p>
                <button onClick={submitFeedback}>Submit Feedback</button>
            </div>
        </>
    )
}

export default Review;