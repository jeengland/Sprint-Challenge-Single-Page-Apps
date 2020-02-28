import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from 'axios';


export default function App() {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
         .then((response) => {
           setData(response.data.results);
         })
  }, [])
  console.log(data);
  return (
    <main>
      <Header />
    </main>
  );
}
