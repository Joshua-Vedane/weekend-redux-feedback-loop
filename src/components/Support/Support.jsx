import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  const support = useSelector(store => store.supportReducer);
  const [newSupport, setNewSupport] = useState(0);

  function handleNext() {
    dispatch({type: 'ADD_SUPPORT', payload: newSupport});
    history.push('/comments');
  }

  // console.log('newSupport is now: ', {newSupport});
  // console.log('supportReducer is now: ', {support});

  return (
    <>
      <h2>How well are you being supported?</h2>
      <div>
        <label htmlFor="supported">Supported?</label>
        <input type="number" name="supported" onChange={(event) => setNewSupport(event.target.value)} value={newSupport} required/>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Support;