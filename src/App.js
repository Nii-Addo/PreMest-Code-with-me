/*
 **Please note,style this app whatever way you choose
 */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //Import BrowserRouter,Switch and Route from react-router-dom
import Home from "./components/Home";
import "./App.css";

// Function that holds all routes in your app
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
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
