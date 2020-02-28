import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  width: 28%;
  margin: 2% 0;
  border: 1px solid black;
  border-radius: 7px;
  padding: 1%;
  img {
    max-width: 100%;
  }
  .character-header {
    display: flex;
    justify-content: center;
    margin-top: 2%;
    h2 {
      margin: 0;
      text-align: center;
    }
    i {
      margin-left: 2%;
      color: red;
      font-size: 1.5rem;
    }
  }
`

export default function CharacterCard(props) {
  const character = props.character;
  return (
    <Card className='character-card'>
      <img src={character.image} title={character.name} alt={`Character portrait of ${character.name}`}/>
      <div className='character-header'>
        <h2>{character.name}</h2>
        {character.status === 'Dead' ? <i className='fas fa-skull'></i> : undefined}
      </div>
      <div className='character-stats'>
        <p>Species: {character.species}</p>
        <p>Homeworld: {character.origin.name}</p>
        <p>Last Location: {character.location.name}</p>
      </div>
    </Card>
  )
}
