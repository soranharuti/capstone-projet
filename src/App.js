import React, { Component } from 'react';
import './App.css';
// import {UserForm} from './components/UserForm'

import { Home } from './components/Application/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserForm /> */}
        <Home />
      </div>
    );
  }
}

export default App;
