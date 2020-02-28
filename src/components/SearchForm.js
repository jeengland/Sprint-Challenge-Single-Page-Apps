import React, { useState } from 'react';

export default function SearchForm(props) {
  return (
    <section className='search-form'>
      <input type='text' value={props.query} onChange={(event) => props.setQuery(event.target.value)} placeholder='Search by name'/>
    </section>
  );
}
