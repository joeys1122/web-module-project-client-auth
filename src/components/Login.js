import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
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
    axios
      .post('http://localhost:9000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('./friends');
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Login;