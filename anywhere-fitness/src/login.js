import React, {useState, useEffect} from 'react';
import FormSchema from './validation';
import Axios from 'axios';
import {Form, Label, Input} from './styling'
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

      })
  })
  
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
