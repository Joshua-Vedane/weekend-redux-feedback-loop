import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
  const history = useHistory();
  const understand = useSelector(store => store.understandingReducer);

  function handleNext() {
    history.push('/support');
  }

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <div>
        <label htmlFor="understanding">Understanding?</label>
        <input type="number" name="understanding" required/>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Understanding;