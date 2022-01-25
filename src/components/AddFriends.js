import React from "react";
import axios from "axios";

import { nanoid } from "nanoid";

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
    
    const token = localStorage.getItem('token');
    const newFriend = {
      ...this.state.credentials,
      id: nanoid(5)
    }

    axios
      .post('http://localhost:9000/api/friends', newFriend, {
        headers: {
          authorization: token
        }
      })
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
      <div>
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddFriends;