import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* <ul>
      <li>
        <Link to='/'>Feeling</Link>
      </li>
      <li>
        <Link to='/understanding'>understanding</Link>
      </li>
      <li>
        <Link to='/support'>support</Link>
      </li>
      <li>
        <Link to='/comments'>comments</Link>
      </li>
      <li>
        <Link to='/review'>review</Link>
      </li>
    </ul> */}
    </div>

  )
}

export default Header;
