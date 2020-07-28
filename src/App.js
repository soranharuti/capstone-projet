import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/login/Main";
import Home from "./components/application/Home";

import "./App.scss";
import Axios from "axios";
Axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
      config.headers['auth-token'] = `${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// if (localStorage.getItem("token")) {
//   Axios.defaults.headers.common["auth-token"] = localStorage.getItem("token");
// }
// function PrivateRoute({ component: Component, authed, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authed === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// }
export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <Main
            setToken={(token) => {
              setToken(token);
              Axios.defaults.headers.common["auth-tokem"] = token;
              localStorage.setItem("token", token);
            }}
          />
        )}
      />
      {Boolean(token) && <Route path="/dashboard"  render={() => <Home token={token} />} />}
      {/* <PrivateRoute
        authed={Boolean(token)}
        path="/dashboard"
        render={() => <Home />}
      /> */}
      {/* <Home /> */}
    </BrowserRouter>
  );
}
