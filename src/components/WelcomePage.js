import React from 'react';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled';

const Welcome = styled.section`
  a {
    display: block;
    width: 10%;
    padding: 1%;
    margin: 2% auto;
    background-color: turquoise;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3), 0 3px 3px rgba(0, 0, 0, 0.22);
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    text-align: center;
    &:hover {
      background-color: paleturquoise;
      color: black;
    }
    &:active {
      box-shadow: none;
    }
  }
`

export default function WelcomePage() {
  return (
    <Welcome className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className='main-img'
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='rick'
        />
        <Link to='/characters'>Enter</Link>
      </header>
    </Welcome>
  );
}
