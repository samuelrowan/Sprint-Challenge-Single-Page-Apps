import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // useEffect(() => {
  //   const filtered = characters.filter(characterName => characterName.includes(search));
  //   setFilteredCharacters(filtered);
  // }, [search]);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleSearch = event => {
    event.preventDefault();
    search += search;
    console.log(search);
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then(res => {
      setFilteredCharacters(res.data.results);
      console.log(res.data.results);
    })
    .catch(error => {
      console.log("hold up now.", error)
    })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={search}
      />
      {filteredCharacters.map(characterName => (
        <div key={characterName}>
          {characterName}
        </div>
      ))}
    </div>
  );
}
