import React, { useState } from 'react';
import styled from '@emotion/styled';

const Search = styled.section`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`

export default function SearchForm(props) {
  return (
    <Search className='search-form'>
      <input type='text' value={props.query} onChange={(event) => props.setQuery(event.target.value)} placeholder='Search by name'/>
    </Search>
  );
}
