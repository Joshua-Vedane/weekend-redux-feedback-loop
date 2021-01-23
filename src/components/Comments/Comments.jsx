import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Feeling() {
  const history = useHistory();
  const comments = useSelector(store => store.commentReducer);

  function handleNext() {
    history.push('/review');
  }

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <div>
        <label htmlFor="comment">Comments</label>
        <input type="text" name="comment" />
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