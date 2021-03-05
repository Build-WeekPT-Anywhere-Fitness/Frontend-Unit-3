
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import InstructorDashboard from "./components/InstructorDashboard";
import UserDashboard from "./components/UserDashboard"
import Signup from "./Forms/SignUpForm";
import Login from "./Forms/Login";
import PrivateRoute from "./components/PrivateRoute";
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

        </nav>

        <Switch>
          <PrivateRoute exact path="/userdashboard" component={UserDashboard} />
          <PrivateRoute exact path="/instructordashboard" component={InstructorDashboard} />

          <Route exact path ="/" component={Login} />
          <Route exact path ="/signup" component={Signup} />


        </Switch>
      </div>

    </Router>
   

  )
}
export default App;
