import React, { Component } from 'react';
import './App.css';
import Display from "./components/Display";
import CatButton from "./components/CatButton";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/game" component={Display} />
        <Route exact path="/highscores" component={Splash} />
      </Switch>
    </div>
  </Router>
);

export default App;