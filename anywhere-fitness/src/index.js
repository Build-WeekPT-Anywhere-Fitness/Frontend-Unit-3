import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import {BrowserRouter as Router} from 'react-router-dom';
import Styles from 'styled-components';

ReactDOM.render(
  <Router>
    <Login />
  </Router>,
  document.getElementById('root')
);
