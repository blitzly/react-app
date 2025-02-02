//import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    const url =
      'http://ec2-18-253-68-107.us-gov-east-1.compute.amazonaws.com/react-app/api/contacts.php';
    console.log('App Constructor - reading PHP API. URL: ' + url);
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ contacts: data });
        console.log(this.state.contacts);
      });
  }

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
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
