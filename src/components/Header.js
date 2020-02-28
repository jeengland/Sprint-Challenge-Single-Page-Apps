import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  a {
    text-align: center;
    margin: 0 1%;
  }
`

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      <Nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/characters'>Characters</NavLink>
      </Nav>
    </header>
  );
}
