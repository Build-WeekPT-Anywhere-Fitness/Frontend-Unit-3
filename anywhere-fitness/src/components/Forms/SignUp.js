import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as yup from 'yup'
import axios from 'axios'
import { Container, Form, Label, Input } from './styles'
import { createUser } from '../../actions/userActions'

import { Link } from 'react-router-dom';
import logo from '../../images/logo3.png';
import { FcGoogle } from 'react-icons/fc';
import { FcFeedback } from 'react-icons/fc';
import { FcServices } from 'react-icons/fc';
import { motion } from 'framer-motion';

const SignUpForm = () => {
    //FORM STATE
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        role: ''
    })
    //ERRORS
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',

        role: ''
    })
    //BUTTON
    const [buttonDisabled, setButtonDisabled] = useState()

    const [users, setUsers] = useState()

    //FORM SCHEMA

    const formSchema = yup.object().shape({
        firstname: yup.string().required('First name is required'),
        lastname: yup.string().required('Last name is required'),
        email: yup
            .string()
            .email('Must be a valid email address')
            .required('Must include an email address'),
        username: yup.string().required('Please enter a username'),
        password: yup
            .string()
            .min(8, 'Must be a minimum of 8 characters')
            .required('Must include a password'),

        role: yup.boolean().required()
    })

    //USEEFFECT FOR FORMSCHEMA
    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
            console.log('valid?', valid)
            setButtonDisabled(!valid)
        })
    }, [formState, formSchema])

    // INPUT CHANGE FUNCTION
    const inputChange = (event) => {
        event.persist()
        const newFormData = {
            ...formState,
            [event.target.name]:
                event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value
        }
        validateChange(event)
        setFormState(newFormData)
    }

    //VALIDATE CHANGE
    const validateChange = (event) => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then((valid) => {
                setErrors({ ...errors, [event.target.name]: '' })
            })
            .catch((error) => {
                setErrors({ ...errors, [event.target.name]: error.errors[0] })
            })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        axios
          .post(
            "https://anytime-fitness.herokuapp.com/api/auth/register",
            formState
          )
          .then((response) => {
            setUsers(response.data);
            console.log(response);
            setFormState({
              firstname: "",
              lastname: "",
              email: "",
              username: "",
              password: "",
              role: "",
            });
          })
          .catch((error) => console.log(error.response));
      };

    return (
        <Container>
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
                    <h1>Hello and welcome,</h1>
                    <p>join the community to find the best fitness classes near you!</p>
                    <h3>Already a member?</h3>
                    <Link to='/login'>
                        <button>Log in</button> 
                    </Link>
                </div>
            </div>
            <Form onSubmit={formSubmit}>
                <div className="icons">
                    <h2>Create an account</h2>
                    <FcGoogle size={32}/>
                    <FcFeedback size={32}/>
                    <FcServices size={32}/>
                </div>

                <div>
                <Label htmlFor="firstname">
                    <Input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={formState.firstname}
                        onChange={inputChange}
                    />

                    {errors.firstname.length > 0 ? (
                            <p>{errors.firstname}</p>
                        ) : null}
                </Label>
                </div>

                <div>
                    <Label htmlFor="lastname">
                        <Input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={formState.lastname}
                            onChange={inputChange}
                        />

                        {errors.lastname.length > 0 ? (
                            <p>{errors.lastname}</p>
                        ) : null}
                    </Label>
                </div>

                <div>
                    <Label htmlFor="email">
                        <Input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onChange={inputChange}
                        />
                        {errors.email.length > 0 ? <p>{errors.email}</p> : null}
                    </Label>
                </div>

                <div>
                    <Label htmlFor="username">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formState.username}
                            onChange={inputChange}
                        />
                        {errors.username.length > 0 ? (
                            <p>{errors.username}</p>
                        ) : null}
                    </Label>
                </div>

                <div>
                    <Label htmlFor="password">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={inputChange}
                        />
                        {errors.password.length > 0 ? (
                            <p>{errors.password}</p>
                        ) : null}
                    </Label>
                </div>

                <div className="role">
                    <Label htmlFor="role">
                        Instructor
                        <Input
                            type="checkbox"
                            name="role"
                            value={formState.role}
                            onChange={inputChange}
                        />
                    </Label>
                </div>

                {JSON.stringify(users, null, 2)}

                <motion.button 
                    whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.8 },
                        color: 'white',
                        backgroundColor: '#18DCBF'
                    }}
                    whileTap={{ scale: 0.3 }}
                    disabled={buttonDisabled} 
                    type="submit">
                    Sign Up!
                </motion.button>
            </Form>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {
    createUser
})(SignUpForm)
