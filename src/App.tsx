import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Nav from './secure/components/Nav';

import Menu from './secure/components/Menu';

import Dashboard from "./secure/Dashboard";
import Users from "./secure/components/Users";

function App() {
  return (
    <React.Fragment>

      <Nav />
      
      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <BrowserRouter>
                <Route path="/" exact component={Dashboard} />
                <Route path="/users" component={Users} />
            </BrowserRouter>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
