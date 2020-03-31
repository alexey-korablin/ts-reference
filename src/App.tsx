import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const sum = (a: number, b: number): number => a + b;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload. Number{' '}
          {sum(12, 21)}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
