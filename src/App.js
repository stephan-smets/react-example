import React, { Component } from 'react'
import Routes from './routes'

import Navbar from './components/navbar'

import 'bootstrap/dist/css/bootstrap.min.css'


// import './App.css'

export default class App extends Component {


  render() {
    return (
      <div>
        <Navbar />

        <Routes />
      </div>
    )
  }
}
