
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import InstructorDashboard from "./components/InstructorDashboard";
import UserDashboard from "./components/UserDashboard"
import Signup from "./Forms/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./Forms/LoginForm";
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-links">
         <Link to="/login">Login</Link>
         <br />
         <Link to="/userdashboard">user dashboard</Link>
         <br/>
         <Link to="/instructordashboard">instructor dashboard</Link>
         <br/>
         <Link to="/signup">signup</Link>

        </nav>

        <Switch>
          <PrivateRoute exact path="/userdashboard" component={UserDashboard} />
          <Route exact path="/instructordashboard" component={InstructorDashboard} />

          <Route exact path ="/login" component={LoginForm} />
          <Route exact path ="/signup" component={Signup} />


        </Switch>
      </div>

    </Router>
   

  )
}
export default App;
