import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
  const history = useHistory();
  const support = useSelector(store => store.supportReducer);

  function handleNext() {
    history.push('/comments');
  }

  return (
    <>
      <h2>How well are you being supported?</h2>
      <div>
        <label htmlFor="supported">Supported?</label>
        <input type="number" name="supported" required/>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Support;