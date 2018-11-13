import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="main">
        <NavBar/ >
        <h1>My React App</h1>
      </div>
    );
  }
}

export default App;
