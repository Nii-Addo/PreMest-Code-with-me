import React from "react";
import Home from "./pages/Home";
import History from "./pages/History";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HistoryProvider } from "./contexts/HistoryContext";
import "./App.css";
const AppRoutes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/regsitration">
        <Signup />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <HistoryProvider>
          <div className="App">
            <AppRoutes />
          </div>
        </HistoryProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
