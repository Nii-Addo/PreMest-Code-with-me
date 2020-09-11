import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css';
const AppRoutes = ( props ) => {
  return ( <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/login">
       <Login/>
    </Route>
  </Switch> );
}

function App() {
  return ( <Router>
      <AuthProvider>
        <div className="App">
          <AppRoutes/>
        </div>
      </AuthProvider>
    </Router> );
}
export default App;