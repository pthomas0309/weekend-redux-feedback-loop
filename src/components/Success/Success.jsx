// source useHistory
import {useHistory} from 'react-router-dom';

// source useDispatch
import {useDispatch} from 'react-redux';

function Success() {
    
    // make useHistory available as history
    const history = useHistory();

    // make useDispatch available as dispatch
    const dispatch = useDispatch();

    // function to handle starting the feedback form over again
    const handleRestart = () => {

        // reset state to the default
        dispatch({
            type: 'RESET'
        });

        // navigate to the beginning of the form
        history.push('/')
    }

    return (
        <div>
            <h3>You Did It!</h3>
            <h4><strong>Thanks for the submission</strong></h4>
            <p>Would you like to start a new feedback form?</p>
            <button onClick={handleRestart}>Start New Feedback</button>
        </div>
    )
}

export default Success;