import React, { Component } from 'react';
import logo from './logo.svg'; // change from old cra
import './App.css';

// function but not a class from old create-react-version, change to the class component.
// A contumed component
class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}
export default App;
