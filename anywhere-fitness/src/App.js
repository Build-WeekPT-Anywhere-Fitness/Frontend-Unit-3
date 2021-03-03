<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import InstructorDashboard from "./components/InstructorDashboard";
import UserDashboard from "./components/UserDashboard"
import Signup from "./components/Forms/SignUp";
import Login from "Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-links">
         
        </nav>

        <Switch>
          <Route exact path="/userdashboard" component={UserDashboard} />
          <PrivateRoute exact path="/instructordashboard" component={InstructorDashboard} />

          <Route exact path ="/" component={Login} />
          <Route exact path ="/signup" component={Signup} />


        </Switch>
      </div>

    </Router>
   
=======
import './App.css';
import SignUpForm from './components/Forms/SignUp';
function App() {
  return (
    <div className="App">
      <SignUpForm />
    </div>
>>>>>>> origin/main
  );
}

export default App;
