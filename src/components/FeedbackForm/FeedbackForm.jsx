import {useState} from 'react';
import {useDispatch} from 'react-redux';

// import useHistory for navigation
import {useHistory} from 'react-router-dom';

function FeedbackForm({feedbackPage}) {

    // local state for input values
    const [feedback, setFeedback] = useState({
        feeling: '',
        understanding: '',
        support: '',
        comment: ''
    })

    const [whatPage, setWhatPage] = useState(feedbackPage);

    const dispatch = useDispatch();

    // make history available
    const history = useHistory();

    // function for building feedback obj
    const handleChange = (event, property) => {

        // prevent page load
        event.preventDefault()

        // set local state too whatever data was in the obj
        // plus the current data being added
        setFeedback({
            ...feedback,
            [property]: event.target.value
        });
    }

    const addToReducer = (action) => {
        switch (action) {
            case 'feeling' : 
                return dispatch({
                type: 'FEELING',
                payload: feedback.feeling
            });
            case 'understanding' : 
                return dispatch({
                type: 'UNDERSTANDING',
                payload: feedback.understanding
            });
            case 'support' : 
                return dispatch({
                type: 'SUPPORT',
                payload: feedback.support
            });
            case 'comment' : 
                return dispatch({
                type: 'COMMENT',
                payload: feedback.comment
            });
            default :
                return;
        }
    }

    const navigateNext = (event) => {

        event.preventDefault();

        if ('feeling' === whatPage) {
            history.push('/understanding');
        } else if ('understanding' === whatPage) {
            history.push('/support');
        } else if ('support' === whatPage) {
            history.push('/comment');
        } else if ('comment' === whatPage) {
            history.push('/review');
        } else {
            return;
        }
    }

    console.log(feedback);
    return( 
        <>
            { 'feeling' != whatPage ?
            <p></p> :

            <form>
                <p>On a scale of 1 - 5, how are you feeling today?</p>
                <label htmlFor="feeling">
                <input onChange={(event) => handleChange(event, 'feeling')} id="feeling" type="number" placeholder="How are you feeling?" required />
                </label>
                <button onClick={(event) => { addToReducer('feeling'); navigateNext(event);}}>NEXT</button>
            </form>
            }

            { 'understanding' != whatPage ?
            <p></p> :
            <form>
                <p>On a scale of 1 - 5, how well do you understand the content?</p>
                <label htmlFor="understanding">
                <input onChange={(event) => handleChange(event, 'understanding')} id="understanding" type="number" placeholder="How is your understanding?" required />
                </label>
                <button onClick={(event) => { addToReducer('understanding'); navigateNext(event);}}>NEXT</button>
            </form>
            }

            { 'support' != whatPage ?
            <p></p> :
            <form>
                <p>On a scale of 1 - 5, how supported do you feel?</p>
                <label htmlFor="support">
                <input onChange={(event) => handleChange(event, 'support')} id="support" type="number" placeholder="How supported do you feel?" required />
                </label>
                <button onClick={(event) => { addToReducer('support'); navigateNext(event);}}>NEXT</button>
            </form>
            }

            { 'comment' != whatPage ?
            <p></p> :   
            <form>
                <p>Please include any additional comments here if you have any.</p>
                <label htmlFor="support">
                <input onChange={(event) => handleChange(event, 'comment')} id="support" type="text" placeholder="Add a comment" required />
                </label>
                <button onClick={(event) => { addToReducer('comment'); navigateNext(event);}}>NEXT</button>
            </form>
            }
        </>
    )
}

export default FeedbackForm;