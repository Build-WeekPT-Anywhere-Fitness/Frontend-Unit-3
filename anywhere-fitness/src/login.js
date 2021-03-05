import React, {useState, useEffect} from 'react';
import FormSchema from './validation';
import {Form, Input, Label} from './styling';
import Axios from 'axios';
import * as yup from 'yup';
//Initial State 
const StateInfo = {
  username: '',
  password: '',
  instructor: ''
};
//Initial Error State
const ErrorInfo = {
  username: '',
  password: '',
  instructor: ''
}
//State
function Login() {
  const [infoState, setInfoState] = useState({StateInfo});
  const [errors, setErrors] = useState({ErrorInfo});
  const [disabledButton, setDisabledButton] = useState();
  const [user, setUser] = useState();

  //useEffect for Validation, and submit button
  useEffect(() => {
    FormSchema.isValid(infoState)
      .then(valid => {
        setDisabledButton(!valid);
      })
  }, [infoState])

  const inputChange = e => {
    e.persist();
    const newData = {
      ...infoState, 
      [e.target.name]:e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }
    validation(e);
    setInfoState(newData);
  }
  //Yup Validation
  const validation = e => {
    yup
      .reach(FormSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({...errors, [e.target.name]: ''});
      })
      .catch(error => {
        setErrors({...errors, [e.target.name]: error.errors[0]});
      })
  }
  //Submit button POST request
  const formSubmit = e => {
    e.preventDefault();
    Axios.post("https://anytime-fitness.herokuapp.com/api/auth/login", infoState)
    .then(response => {
      setUser(response.data);
      setInfoState({
        username: '',
        password: '',
      })
    })
    .catch(error => {
      console.log(error.response)
    })
  }
  //Form layout
  return (
    <Form className = 'login' onSubmit ={formSubmit}>
      <Label> Username: 
        <Input 
          type = 'text'
          name = 'username'
          value = {infoState.username}
          onChange = {inputChange}
        /> 
      </Label>

      <Label> Password: 
        <Input 
          input = 'text'
          name = 'password'
          value = {infoState.password}
          onChange = {inputChange}
        />
      </Label>

      <div className = 'instuctorToggle'>
        <Label> Instructor
          <Input 
            type = 'checkbox'
            name = 'instructorBox'
            value = {infoState.instructor}
            onChange = {inputChange}
          />
        </Label>
      </div>
      <button disabled = {disabledButton} type = 'submit'>Log In</button>
      <div>{errors.username}</div>
      <div>{errors.password}</div>
    </Form>
  )}

export default Login;
