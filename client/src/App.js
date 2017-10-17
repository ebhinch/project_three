import React, { Component } from 'react';

import './App.css';

// Rename BrowserRouter to Router
// Switch guarantees that we won't accidentally show multiple Routes at once
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Import your own components after imports from node_modules
import HomePage from "./components/home/HomePage.js"
import UserPage from "./components/user/UserPage.js"
import IndividualUserPage from "./components/user/IndividualUserPage.js"
import VineyardPage from "./components/vineyard/VineyardPage.js"
import IndividualVineyardPage from "./components/vineyard/IndividualVineyardPage.js"
import NavBar from "./components/NavBar.js"
import Footer from "./components/Footer.js"
import ContactPage from "./components/contact/ContactPage.js"
import NotePage from "./components/note/NotePage.js"
import styled from "styled-components"


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
            <Route exact path="/users/:userId/notes" component={NotePage} />
            <Route exact path="/vineyards" component={VineyardPage} />
            <Route exact path="/vineyards/:vineyardId" component={IndividualVineyardPage} />
            <Route exact path="/users/:userId" component={IndividualUserPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App

