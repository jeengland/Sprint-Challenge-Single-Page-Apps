import React from 'react';

export default function CharacterCard(props) {
  const character = props.character;
  return (
    <div className='character-card'>
      <img src={character.image} title={character.name} alt={`Character portrait of ${character.name}`}/>
      <div className='character-header'>
        <h2>{character.name}</h2>
        {character.status === 'Dead' ? <i class='fas fa-skull'></i> : undefined}
      </div>
      <div className='character-stats'>
        <p>Species: {character.species}</p>
        <p>Homeworld: {character.origin.name}</p>
        <p>Current Location: {character.location.name}</p>
      </div>
    </div>
  )
}
