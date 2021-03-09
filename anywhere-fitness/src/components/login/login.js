import React, {useState, useEffect} from 'react';
import FormSchema from '../login/validation';
import { Form, Input, Label, Container } from './styling';
import Axios from 'axios';
import * as yup from 'yup';

import { Link } from 'react-router-dom';
import logo from '../../images/logo3.png';
import { FcGoogle } from 'react-icons/fc';
import { FcFeedback } from 'react-icons/fc';
import { FcServices } from 'react-icons/fc';
import { motion } from 'framer-motion';

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
  const [ setUser] = useState();

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
    <Container>
      <Form className = 'login' onSubmit ={formSubmit}>
        <div className="icons">
          <h2>Sign into your account</h2>
          <FcGoogle size={32}/>
          <FcFeedback size={32}/>
          <FcServices size={32}/>
        </div>
        <Label>
          <Input 
            type = 'text'
            name = 'username'
            placeholder="Username"
            value = {infoState.username}
            onChange = {inputChange}
          /> 
        </Label>
        <Label>
          <Input 
            input = 'text'
            name = 'password'
            placeholder="Password"
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
        <motion.button
          whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.8 },
          color: 'white',
          backgroundColor: '#18DCBF'
          }}
          whileTap={{ scale: 0.3 }}
          disabled = {disabledButton} 
          type = 'submit'>
          Log In
        </motion.button>
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </Form>
      <div className="hero-banner"> 
        <div className="content">
          <Link to='/'>
            <motion.img 
              whileHover={{ rotateZ: 360 }}
              transition={{ 
              ease: "easeIn", 
              duration: 0.7
              }}
              src={logo} 
              alt="logo"
            />
          </Link>
          <h1>Welcome back,</h1>
          <p>lets keep working towards your fitness goals!</p>
          <h3>Not a member yet?</h3>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </Container>
  )}

export default Login;
