import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Feeling() {
  const history = useHistory();
  const feeling = useSelector(store => store.feelingReducer);

  function handleNext() {
    history.push('/understanding');
  }

  return (
    <>
      <h2>How are you feeling today?</h2>
      <div>
        <label htmlFor="feeling">Feeling?</label>
        <input type="number" name="feeling" required />
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