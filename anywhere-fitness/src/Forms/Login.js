import React,{useState} from "react";
import {useHistory} from "react-router-dom"
import {loginUser} from "../actions/userActions"
import { connect } from 'react-redux'

const initialState = ({
    username:"",
    password:"",
})


const Login = () =>{
    const [user, setUser] = useState(initialState);


    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        loginUser(user)
        setUser({
            username:"",
            password:"",
        })
    }
    

return(
    <div className="login-form">
        <form onSubmit={handleSubmit}>
            <input
            value={user.username}
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Type in username"
            />
            <input
            value={user.password}
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Type in password"
            />
        <button>Login</button>
        </form>
    </div>
)
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {loginUser})(Login);