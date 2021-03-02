import React, {useState, useEffect} from 'react';
import FormSchema from './validation';
import Axios from 'axios';
import {Form, Label, Input} from './styling'
import { ValidationError } from 'yup';
import axios from 'axios';
function StateInfo() {
  username: ''
  password: ''
  instructor: ''
};

function ErrorInfo() {
  username: ''
  password: ''
  instructor: ''
}

function Login() {
  const [infoState, setInfoState] = useState({StateInfo});
  const [errors, setErrors] = useState({ErrorInfo});
  const [disabledButton, setDisabledButton] = useState();
  const [user, setUser] = useState();


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

  const formSubmit = e => {
    e.preventDefault();
    axios.post("https://anytime-fitness.herokuapp.com/api/auth/login", infoState)
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

  return (
    <Form className = 'login'>
      <Label> Username: 
        <Input 
          type = 'text'
          name = 'username'
        /> 
      </Label>

      <Label> Password: 
        <Input 
          input = 'text'
          name = 'password'
        />
      </Label>

      <div className = 'instuctorToggle'>
        <Label> Instructor
          <Input 
            type = 'checkbox'
            name = ' instructorBox'
          />
        </Label>
      </div>
    </Form>
  )}

export default Login;
