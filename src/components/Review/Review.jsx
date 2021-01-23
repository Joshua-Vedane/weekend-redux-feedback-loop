import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function Review(){
  const history = useHistory();
  const feeling = useSelector(store => store.feelingReducer);
  const understand = useSelector(store => store.understandingReducer);
  const support = useSelector(store => store.supportReducer);
  const comments = useSelector(store => store.commentReducer);
  const feedback = useSelector(store => store.feedbackReducer);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  //ON SUBMIT TRIGGERS POST ROUTE. 
  // condo rendering to show completed? or separate comp to route to?

  //NEED TO CLEAR REDUCERS HERE SOMEWHERE

  const handleSubmit = (event) => {
    event.preventDefault();
    let feedbackToSend = {
      feeling: feeling, 
      understanding: understand, 
      support: support, 
      comments: comments
    }
    console.log('about to post:', feedbackToSend);
    axios.post('/feedback', feedbackToSend)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
    setIsSubmitted(!isSubmitted);
  }

  const handleNewFeedback = () => {
    history.push('/');
  }

  return(
    <>
     {!isSubmitted ? (
       <div className='review-container'>
        <h1>Review Your Feedback</h1>
        <h4>Feelings: {feeling}</h4>
        <h4>Understanding: {understand}</h4>
        <h4>Support: {support}</h4>
        <h4>Comments: {comments}</h4>
        <form onSubmit={handleSubmit}>
          <button type="submit">SUBMIT</button>
        </form>
       </div>
     ):(
       <div className='submittal-container'>
        <h1>THANK YOU!!</h1>
        <button onClick={handleNewFeedback}>Leave New Feedback</button>
       </div>
     )}
    </>
    
      
      
  
  )
}

export default Review;