import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


import Login from '../src/Login/Login'
import Admin from '../src/Admin/Admin'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <div>
        <nav>
     
        <Button variant="contained" color="primary">
          <Link to = "/login">Login</Link>
      </Button>

      <Button variant="contained" color="primary">
          <Link to = "/admin">Admin</Link>
      </Button>
           
           
           
      </nav>
        </div>

        <Switch>
          <Route path= "/admin">
            <Admin></Admin>
          </Route>
          
          <Route path= "/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>

      </BrowserRouter>
      
    );
  }
}

export default App;
