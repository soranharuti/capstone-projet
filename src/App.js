import React, { Component } from 'react';
import './App.css';
import {UserForm} from './components/UserForm'

import { Home } from './components/Application/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        {/* <Home /> */}
      </div>
    );
  }
}
// /signup //
// /login // ->my user object 
// /me (my data) . ---> rect 
// /addTransaction (authenticated has cookie) only to same user 
// [{
//   email: 'soran'
//   id:'genertated'
//   password: 'sadasda'
//   transctions:[{
//     name:'stock revenue',
//     amount: 50
//   }]
// },{
//   name: 'soran'
//   id:'genertated'
//   password: 'sadasda'
//   transctions:[{
//     name:'stock revenue',
//     amount: 50
//   }]
// }{
//   name: 'soran'
//   id:'genertated'
//   password: 'sadasda'
//   transctions:[{
//     name:'stock revenue',
//     amount: 50
//   }]
// }]
export default App;
