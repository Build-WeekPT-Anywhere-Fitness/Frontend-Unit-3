import React from 'react';
import ReactDOM from 'react-dom';
// import Login from './login';
import './index.css';

import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './redux/userReducer'
import classReducer from './redux/classReducer'


import App from './App'
// import reportWebVitals from './reportWebVitals'


// ReactDOM.render(
//   <Router>
//     <Login />
//   </Router>,
//   document.getElementById('root')
// );


const rootReducer = combineReducers({ userReducer, classReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
