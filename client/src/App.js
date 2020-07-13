import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactState from "./Context/Contact/ContactState";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import AuthState from "./Context/Auth/AuthState";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AlertState from "./Context/Alert/AlertState";
import Alert from "./components/Layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/Routing/PrivateRoute";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
