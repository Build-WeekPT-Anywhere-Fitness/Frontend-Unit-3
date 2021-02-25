import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import {BrowserRouter as Router} from 'react-router-dom';
import Style from 'styled-components';
import * as yup from 'yup';

ReactDOM.render(
  <Router>
    <Login />
  </Router>,
  document.getElementById('root')
);
