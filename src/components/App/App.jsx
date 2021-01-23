import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import {useEffect} from 'react';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

import './App.css';

function App() {

  return (
    <Router>
      <Route>
        <Header/>
      </Route>
      <main>
        <Route exact path="/">
          <Feeling/>
        </Route>
        <Route path="/understanding">
          <Understanding/>
        </Route>
        <Route path="/support">
          <Support/>
        </Route>
        <Route path="/comments">
          <Comments/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
      </main>
    
    </Router>
  );
}

export default App;
