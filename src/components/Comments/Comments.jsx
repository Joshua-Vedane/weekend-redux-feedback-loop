import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState("");

  // update commentsReducer with newComment

  function handleNext() {
    dispatch({ type: 'ADD_COMMENT', payload: newComment })
    history.push('/review');
  }

  //comments not wrapped in form because no validation. 
  return (
    <>
      <h2 className='form-heading'>Any comments you want to leave?</h2>
      <div className='form-feedback'>
        <label htmlFor="comment">Comments</label>
        <input type="text" name="comment" onChange={(event) => setNewComment(event.target.value)} value={newComment} />
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Feeling;
