import { Route, Switch } from 'react-router-dom';
import SignUpForm from './components/Forms/SignUp';
import Login from './components/login/login';
import Home from './components/homepage/home';


function App() {
  return (
    
    <div className="App">
      <div className="routes">
        <Switch>
          <Route path='/signup'>
            <SignUpForm />
          </Route>     
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch> 
      </div>
    </div>
  );
}


export default App;
