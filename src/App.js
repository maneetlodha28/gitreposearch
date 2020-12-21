import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./Context/UserContext";
import Footer from "./Context/layout/Footer";
import Header from "./Context/layout/Header";
import FirebaseConfig from "./Config/FirebaseConfig";

firebase.initializeApp(FirebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
