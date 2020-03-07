import React, { useState } from 'react';
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

  /** Define State */
  const [ quote, setQuote ] = useState({});

  const getApiData = async () => {
    const api = await fetch( 'https://www.breakingbadapi.com/api/quote/random' ),
          quote = await api .json();
    
    setQuote( quote[ 0 ] );
    console .log( 'useState', quote );
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
