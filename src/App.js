import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friend List</Link>
        <Link to='/friends/add'>Add Friend</Link>
        <Link to='/logout'>Logout</Link>
        <Switch>
          <Route path='/logout' component={Logout}/>
          <Route path='/friends/add' component={AddFriends}/>
          <Route path='/friends' component={FriendsList}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
