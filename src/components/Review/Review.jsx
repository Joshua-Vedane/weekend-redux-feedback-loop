import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review(){
  const history = useHistory();
  const feeling = useSelector(store => store.feelingReducer);
  const understand = useSelector(store => store.understandingReducer);
  const support = useSelector(store => store.supportReducer);
  const comments = useSelector(store => store.commentReducer);
  const feedback = useSelector(store => store.feedbackReducer);

  //ON SUBMIT TRIGGERS POST ROUTE. 
  // condo rendering to show completed? or separate comp to route to?
  return(
    <>
      <h1>Review Your Feedback</h1>
      <h4>Feelings: {feeling}</h4>
      <h4>Understanding: {understand}</h4>
      <h4>Support: {support}</h4>
      <h4>Comments: {comments}</h4>
      <form>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  )
}

export default Review;