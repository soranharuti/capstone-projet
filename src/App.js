import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/login/Main';
import Home from './components/application/Home'

import './App.scss'

export default function App() {
  return (
    <BrowserRouter>
     <Main />
     <Home />
    </BrowserRouter>
  )
}
