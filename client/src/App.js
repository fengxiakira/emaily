import React from 'react';
import logo from './logo.svg';
import './App.css';

//  a href in production , automatically go to the heroku site
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hi There.
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

      <a href="/auth/google"> Sign in with Google</a>
    </div>
  );

}

export default App;
