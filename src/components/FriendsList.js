import React from "react";

import Friend from "./Friend";

import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axiosWithAuth()
      .get('/friends')
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