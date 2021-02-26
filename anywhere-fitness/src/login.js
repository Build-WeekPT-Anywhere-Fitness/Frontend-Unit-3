import React from 'react';
import StyleLog from './styling';


function Login() {
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
