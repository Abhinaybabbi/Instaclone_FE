

import React from 'react';
import HomePage from '../Home/login';
import Posts from '../Posts/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import history from '../../utils/history';
import Register from '../Home/register';
import Addpost from '../Post/addpost';

const App = ()=> {
  return(
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/register' exact component={Register} />
      <Route path='/addpost' exact component={Addpost} />
      <PrivateRoute exact path='/posts'  component={Posts} />
    </Switch>
  </Router>
  );
}
  
export default App;
