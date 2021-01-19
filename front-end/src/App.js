import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {

  const [message, setMessage] = useState(undefined)

  useEffect(async () => {
    try {
      const resp = await axios.get('/api/test');
      console.log(resp)
      setMessage(resp.data)
    } catch (err) {
      console.error(err);
    }
  })

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
        <p>{message ? message : "message has not yet arrived"}</p>
      </header>
    </div>
  );
}

export default App;
