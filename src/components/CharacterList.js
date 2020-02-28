import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default function CharacterList() {
  const [ data, setData ] = useState([]);
  const [ display, setDisplay ] = useState([]);
  const [ query, setQuery ] = useState("");
  // API call
  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${query.toLowerCase()}`)
         .then((response) => {
           setData(response.data.results);
           setDisplay(response.data.results);
         })
  }, [query])
  // --- Legacy search function ---
  // useEffect(() => {
  //   const searchResults = data.filter((entry) => entry.name.toLowerCase().includes(query.toLowerCase()));
  //   setDisplay(searchResults);
  // }, [query])
  return (
    <React.Fragment>
      <SearchForm setQuery={setQuery} query={query}/>
      <CardContainer className='character-list'>
        {display.length
          ? display.map((character => {
            return (
              <CharacterCard character={character}/>
            )
          }))
          : <h2>No matches</h2>
        }
      </CardContainer>
    </React.Fragment>
  );
}
