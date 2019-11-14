import React from 'react';
import logo from '../assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REACT + REDUX + REDUX-DEVTOOLS + CONNECTED REACT ROUTER + AXIOS
        </p>
        <p>
          Minimal Boilerplate
        </p>
        <span>Author: </span>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://fariscode.github.io/"
        >
          Syed Faris Ahmed
        </a>
      </header>
    </div>
  );
}

export default App;
