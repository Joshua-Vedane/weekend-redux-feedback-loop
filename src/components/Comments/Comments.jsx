import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  const comments = useSelector(store => store.commentReducer);
  const [newComment, setNewComment] = useState("");

  function handleNext() {
    dispatch({type: 'ADD_COMMENT', payload: newComment})
    history.push('/review');
  }


  // console.log('newComment is now:', {newComment});
  // console.log('commentReducer is now:', {comments});
  
  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <div>
        <label htmlFor="comment">Comments</label>
        <input type="text" name="comment" onChange={(event) => setNewComment(event.target.value)} value={newComment}/>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Feeling;

/*
HTML is similar for feeling/understand/support
h2 > with text
label
input:number
button for redirect and update state



*/