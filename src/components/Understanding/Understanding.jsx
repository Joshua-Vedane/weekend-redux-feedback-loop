import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [newUnderstanding, setNewUnderstanding] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'ADD_UNDERSTANDING', payload: newUnderstanding })
    history.push('/support');

  }

  return (
    <>
      <h2 className='form-heading'>How well are you understanding the content?</h2>
      <div className='form-feedback'>
        <form onSubmit={handleSubmit}>

          <label htmlFor="understanding">Understanding?</label>
          <input type="number" name="understanding" min="1" placeholder="1-10" onChange={(event) => setNewUnderstanding(event.target.value)} value={newUnderstanding} required />
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  )
}

export default Understanding;