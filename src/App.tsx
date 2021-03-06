import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";


import Dashboard from "./secure/dashboard/Dashboard";
import Users from './secure/users/Users';
import Login from "./public/Login";
import Register from "./public/Register";
import RedirectToDashboard from "./secure/RedirectToDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={RedirectToDashboard} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App; 