import React from "react";
import axios from "axios";

import Friend from "./Friend";

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    axios
      .get('http://localhost:9000/api/friends', {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => {
          return <Friend key={friend.id} friend={friend}/>
        })}
      </div>
    )
  }
}

export default FriendsList;