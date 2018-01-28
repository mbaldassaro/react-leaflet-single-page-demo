import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Data from "./Data";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="#">Bangladata</NavLink></li>
            <li><NavLink exact to="/">Maps</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/data">Data</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/data" component={Data}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
