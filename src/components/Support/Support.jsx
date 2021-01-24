import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Support() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [newSupport, setNewSupport] = useState("");

  // update supportReducer with newSupport
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'ADD_SUPPORT', payload: newSupport });
    history.push('/comments');
  }


  return (
    <>
      <h2 className='form-heading'>How well are you being supported?</h2>
      <div>
        <form onSubmit={handleSubmit} className='form-feedback'>

          <label htmlFor="supported">Supported?</label>
          <input type="number" name="supported" min="1" placeholder="1-10" onChange={(event) => setNewSupport(event.target.value)} value={newSupport} required />
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  )
}

export default Support;