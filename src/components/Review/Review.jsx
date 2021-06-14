import {useSelector} from 'react-redux';

function Review() {

    const feedback = useSelector(store => store.feedbackReducer);

    console.log(feedback);
    return(
        <>
            <div>
                <h2><strong>Review Your Feedback</strong></h2>
                <p>Feeling: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comment: {feedback.comment}</p>
                <button>Submit Feedback</button>
            </div>
        </>
    )
}

export default Review;