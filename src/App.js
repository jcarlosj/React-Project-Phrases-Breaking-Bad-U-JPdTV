import React from 'react';
import logo from './breaking-bad-logo.svg';
import './App.css';
import styled from '@emotion/styled';

const Button = styled .button `
  background: #085D2E;
  border: 1px solid black;
  font-size: 2rem;
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
`;

function App() {

  const getApiData = () => {
    console .log( 'API Data' );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Breaking Bad" />
        <Button 
          onClick={ () => getApiData() }
        >New phrase</Button>
      </header>
    </div>
  );
}

export default App;
