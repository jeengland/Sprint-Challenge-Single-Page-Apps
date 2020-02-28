import React, { useState } from 'react';
import styled from '@emotion/styled';


const Search = styled.section`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`

export default function SearchForm(props) {
  const [ search, setSearch ] = useState("")
  return (
    <Search className='search-form' >
      <input type='text' value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search by name'/>
      <button onClick={() => props.setQuery(search)}>Search</button>
    </Search>
  );
}
