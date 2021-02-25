import React from "react";
import * as yup from "yup";
import axios from "axios";
import { Container, Form, Label, Input } from "./styles";

const SignUpForm = () => {
  return (
    <Container>
      <Form>
        <div>
          <Label htmlFor="first_name">
            First Name
            <Input id="firstname" type="text" name="firstname" />
          </Label>
        </div>

        <div>
          <Label htmlFor="last_name">
            Last Name
            <Input id="lastname" type="text" name="lastname" />
          </Label>
        </div>

        <div>
          <Label htmlFor="username">
            Username
            <Input id="username" type="text" name="username" />
          </Label>
        </div>

        <div>
          <Label htmlFor="password">
            Password
            <Input id="password" type="password" name="password" />
          </Label>
        </div>

        <div>
          <Label htmlFor="instructor">Instructor
            <Input id="instructor" type="checkbox" name="instructor" />
          </Label>
        </div>
        <button>Sign Up!</button>
      </Form>
    </Container>
  );
};

export default SignUpForm;