import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friend List</Link>}
        <Link to='/friends/add'>Add Friend</Link>
        <Link to='/logout'>Logout</Link>
        <Switch>
          <PrivateRoute exact path='/friends/add' component={AddFriends}/>
          <PrivateRoute exact path='/friends' component={FriendsList}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
