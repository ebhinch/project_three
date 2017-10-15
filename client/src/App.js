import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Rename BrowserRouter to Router
// Switch guarantees that we won't accidentally show multiple Routes at once
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import your own components after imports from node_modules
import HomePage from "./components/home/HomePage.js"
import UserPage from "./components/user/UserPage.js"
import VineyardPage from "./components/vineyard/VineyardPage.js"
import NavBar from "./components/NavBar.js"
import Footer from "./components/Footer.js"

class App extends Component {
  render() {
    return (
      <Router>
        {/* Router only allows one child component, so we wrap everything in a div. */}
        <div>
          {/* Anything outside of Switch is global and available in every view */}
          {/* This is a good place to add NavBars or Footers */}
          <NavBar />

          <Switch>
            {/* React Router reads routes from the top down and will match the first route it finds */}
            {/* Use exact to guarantee that React Router hits ONLY on path */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/vineyards" component={VineyardPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App