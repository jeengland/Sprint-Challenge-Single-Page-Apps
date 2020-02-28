import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
         .then((response) => {
           setData(response.data.results);
         })
  }, [])
  return (
    <section className='character-list'>
      {data.map((character => {
        return (
          <CharacterCard character={character}/>
        )
      }))}
    </section>
  );
}
