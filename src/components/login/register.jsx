import React from "react";
import loginImg from "../../Assets/login.png";
import axios from "axios";

export class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event, type) => {
    if (type === "name") {
      this.setState({ name: event.target.value });
    }
    if (type === "email") {
      this.setState({ email: event.target.value });
    }
    if (type === "password") {
      this.setState({ password: event.target.value });
    }
    // this.setState({ email: event.target.value });
    // this.setState({ password: event.target.value });
  };

  handdleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`http://localhost:8080/register`, user).then((res) => {
      this.setState({
        name: "",
        email: "",
        password: "",
      });
    });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="register" />
          </div>
          <form className="form" onSubmit={this.handdleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={(e) => this.handleChange(e, "name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => this.handleChange(e, "email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => this.handleChange(e, "password")}
              />
            </div>

            <div className="footer">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
