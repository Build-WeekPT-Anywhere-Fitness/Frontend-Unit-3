import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { Container, Form, Label, Input } from "./styles";

const SignUpForm = () => {
  //FORM STATE
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });
  //ERRORS
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });
  //BUTTON
  const [buttonDisabled, setButtonDisabled] = useState();

  const [users, setUsers] = useState();

  //FORM SCHEMA

  const formSchema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include an email address"),
    username: yup.string().required("Please enter a username"),
    password: yup
      .string()
      .min(8, "Must be a minimum of 8 characters")
      .required("Must include a password"),
    role: yup.boolean().required(),
  });

  //USEEFFECT FOR FORMSCHEMA
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setButtonDisabled(!valid);
    });
  }, [formState]);

  // INPUT CHANGE FUNCTION
  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  //VALIDATE CHANGE
  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({ ...errors, [event.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [event.target.name]: error.errors[0] });
      });
  };

  //FORM SUBMIT

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
      <Form onSubmit={formSubmit}>
        <h2 className="sign-up">Sign Up Today!</h2>
        <div>
          <Label htmlFor="firstname">
            <Input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formState.firstname}
              onChange={inputChange}
            />
            {errors.firstname.length > 0 ? <p>{errors.firstname}</p> : null}
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
            {errors.lastname.length > 0 ? <p>{errors.lastname}</p> : null}
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
            {errors.username.length > 0 ? <p>{errors.username}</p> : null}
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
            {errors.password.length > 0 ? <p>{errors.password}</p> : null}
          </Label>
        </div>

        <div>
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

        <button disabled={buttonDisabled} type="submit">
          Sign Up!
        </button>
      </Form>
    </Container>
  );
};

export default SignUpForm;
