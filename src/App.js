import React, { Component } from 'react';
import logo from './logo.svg';
import profilePic from './profilePic.png'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={profilePic} className="Profile-pic" alt="profilePic" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kamal</h1>
        </header>
        <p className="App-intro">
          React Assignment - 1
        </p>
      </div>
    );
  }
}

export default App;
