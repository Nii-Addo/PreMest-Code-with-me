/*
 **Please note,style this app whatever way you choose
 */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //Import BrowserRouter,Switch and Route from react-router-dom
import Home from "./components/Home";
import Newpostform from "./components/Newpostform"
import Login from "./components/Login"
import Navigation from "./components/Navigation"
import "./App.css";
import "./components/bootstrap.css"


// Function that holds all routes in your app
const AppRoutes = () => {
  return (
    <BrowserRouter>

    <Navigation />
    
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/newpost" exact>
          <Newpostform />
        </Route> 

        <Route path="/login" exact>
          <Login />
        </Route> 

  </Switch>
    </BrowserRouter>
  );
};

//import that function into funtion app
function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
export default App;
