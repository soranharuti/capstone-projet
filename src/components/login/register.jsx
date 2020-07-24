import React from "react";
import loginImg from "../../Assets/login.png";


export class Register extends React.Component {
  
  state= {
    name: "",
    email: "",
    password: ""
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Full Name" value={name} onChange={event => this.setState({name: event.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" value={email} onChange={event => this.setState({email: event.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Password" value={password} onChange={event => this.setState({password: event.target.value})}/>
            </div>
          </form>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}