import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import mainPage from "./pages/mainpage";
import registreren from "./pages/registreren";
import resultaten from "./pages/resultaten";


export default class routes extends Component {
    render() {
      return (
        <div>
          <Router>
            <Route path="/" exact component={mainPage} />
            <Route path="/Registreren" exact component={registreren} />
            <Route path="/Resultaten" exact component={resultaten} />

               
          </Router>
        </div>
      )
    }
  }
  