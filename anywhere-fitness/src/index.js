<<<<<<< HEAD
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
=======
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './redux/userReducer'
import classReducer from './redux/classReducer'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootReducer = combineReducers({ userReducer, classReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
>>>>>>> 40ee97715f37cd4673f7b43469bb5e51fc60d694
