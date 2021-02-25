import React from 'react';


function Login() {
  return (
    <form className = 'login'>
      <label> Username: 
        <input 
          type = 'text'
          name = 'username'
        /> 
      </label>

      <label> Password: 
        <input 
          input = 'text'
          name = 'password'
        />
      </label>

      <div className = 'instuctorToggle'>
        <label> Instructor
          <input 
            type = 'checkbox'
            name = ' instructorBox'
          />
        </label>
      </div>
    </form>
  )}

export default Login;
