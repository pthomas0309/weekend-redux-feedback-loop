import {useState} from 'react';
import {useDispatch} from 'react-redux';

function FeedbackForm() {

    // local state for input values
    const [feedback, setFeedback] = useState({
        feeling: '',
        understanding: '',
        support: '',
        comment: ''
    })

    const dispatch = useDispatch();

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
                payload: feedback
            });
            case 'understanding' : 
                return dispatch({
                type: 'UNDERSTANDING',
                payload: feedback
            });
            case 'support' : 
                return dispatch({
                type: 'SUPPORT',
                payload: feedback
            });
            case 'comment' : 
                return dispatch({
                type: 'COMMENT',
                payload: feedback
            });
        }
    }

    console.log(feedback);
    return( 
        <>
            <form>
                <p>On a scale of 1 - 5, how are you feeling today?</p>
                <label htmlFor="feeling">
                <input onChange={(event) => handleChange(event, 'feeling')} id="feeling" type="text" placeholder="How are you feeling?" required />
                </label>
                <button onClick={() => addToReducer('feeling')}>NEXT</button>
            </form>

            <form>
                <p>On a scale of 1 - 5, how well do you understand the content?</p>
                <label htmlFor="understanding">
                <input onChange={(event) => handleChange(event, 'understanding')} id="understanding" type="text" placeholder="How is your understanding?" required />
                </label>
                <button onClick={() => addToReducer('understanding')}>NEXT</button>
            </form>

            <form>
                <p>On a scale of 1 - 5, how supported do you feel?</p>
                <label htmlFor="support">
                <input onChange={(event) => handleChange(event, 'support')} id="support" type="text" placeholder="How supported do you feel?" required />
                </label>
                <button onClick={() => addToReducer('support')}>NEXT</button>
            </form>

            <form>
                <p>Please include any additional comments here if you have any.</p>
                <label htmlFor="support">
                <input onChange={(event) => handleChange(event, 'comment')} id="support" type="text" placeholder="How supported do you feel?" required />
                </label>
                <button onClick={() => addToReducer('comment')}>NEXT</button>
            </form>
        </>
    )
}

export default FeedbackForm;