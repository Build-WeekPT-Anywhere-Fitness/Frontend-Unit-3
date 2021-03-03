import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Login />
  </Router>,
  document.getElementById('root')
);
