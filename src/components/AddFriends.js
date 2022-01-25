import React from "react";

import { nanoid } from "nanoid";

import axiosWithAuth from "../utils/axiosWithAuth";

class AddFriends extends React.Component {
  state = {
    credentials: {
      id: '',
      name: '',
      age: 0,
      email: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const newFriend = {
      ...this.state.credentials,
      id: nanoid(5)
    }

    axiosWithAuth()
      .post('/friends', newFriend)
      .then(res => {
        console.log(res);
        this.setState({
          credentials: {
            ...this.state.credentials,
            id: '',
            name: '',
            email: ''
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Add Friend</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Friend Name</label>
          <input
            type='text'
            name='name'
            value={this.state.credentials.name}
            onChange={this.handleChange}
          />
          <label>Friend Email</label>
          <input
            type='email'
            name='email'
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default AddFriends;