import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const understand = useSelector(store => store.understandingReducer);
  const [newUnderstanding, setNewUnderstanding] = useState(0);


  function handleNext() {
    dispatch({type: 'ADD_UNDERSTANDING', payload: newUnderstanding})
    history.push('/support');
    // clear inputs? UseEffect to clear on component reload?
  }


  // console.log('newUnderstanding is:' , {newUnderstanding});
  // console.log('understandReducer is: ', {understand});
  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <div>
        <label htmlFor="understanding">Understanding?</label>
        <input type="number" name="understanding" onChange={(event) => setNewUnderstanding(event.target.value)} value ={newUnderstanding} required/>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Understanding;