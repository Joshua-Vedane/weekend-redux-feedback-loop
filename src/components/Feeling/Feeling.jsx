import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
function Feeling() {
  const history = useHistory();
 
  const [newFeeling, setNewFeeling] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    //dispatch
    dispatch({ type: 'ADD_FEELING', payload: newFeeling })
    history.push('/understanding');
    //clear inputs
  }

  
  return (
    <>
      <div className='form-heading'>
        <h2 >How are you feeling today?</h2>
      </div>
      <div className="form-feedback">
        <form onSubmit={handleSubmit}>

          <label htmlFor="feeling">Feeling?</label>
          <input type="number" name="feeling" min="1" placeholder='1-10' onChange={(event) => setNewFeeling(event.target.value)} value={newFeeling} required />
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  )
}

export default Feeling;
