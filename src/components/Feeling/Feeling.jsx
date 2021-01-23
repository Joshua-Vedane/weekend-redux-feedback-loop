import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';
function Feeling() {
  const history = useHistory();
  // const feeling = useSelector(store => store.feelingReducer);
  const [newFeeling, setNewFeeling] = useState(0);
  const dispatch = useDispatch();

  // function handleChange(event){
  //   const value = event.target.value;
  //   setNewFeeling(value);
  //   console.log(newFeeling);
  // }

  function handleNext() {
    //dispatch
    dispatch({type: 'ADD_FEELING', payload: newFeeling})
    history.push('/understanding');
    //clear inputs
  }

  // console.log('newFeeling is now:' , {newFeeling});
  // console.log('feelingReducer is now:', {feeling});
  return (
    <>
      <h2>How are you feeling today?</h2>
      <div>
        <label htmlFor="feeling">Feeling?</label>
        <input type="number" name="feeling" onChange={(event) => setNewFeeling(event.target.value)} value={newFeeling} required />
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