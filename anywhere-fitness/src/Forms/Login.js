import React,{useState} from "react";
import {useHistory} from "react-router-dom"
import {userLogin} from "../actions/userActions"
import { connect } from 'react-redux'

const initialState = ({
    username:"",
    password:"",
})

const Login = () =>{
    const [user, setUser] = useState(initialState);

    // const history = useHistory();

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        userLogin(user)
        setUser({
            username:"",
            password:"",
        })
        // history.push('/userdashboard')
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

export default connect(mapStateToProps, {userLogin})(Login);