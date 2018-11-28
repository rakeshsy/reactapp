import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div classname="App">
        <ul>
          {items.map(item => (
            <li key="{item.id}">
              Id: {item.id} | Name: {item.name} | Username: {item.username} | Email: {item.email} | Phone: {item.phone} 
                | Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;



/* zzzzz: ORIGINAL CODE FROM BOIELER PLATE

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    );
  }
}

export default App;
*/