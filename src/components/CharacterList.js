import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(stuff => {
        setCharacters(stuff.data.results);
      })
      .catch(error => {
        console.log("Help! I need somebody!", error);
      });
    }
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <div>
      {characters.map(character => (
        <div>
          <Link to={`/characters/${character.id}`}>
          <CharacterInfo id={character.id} character={character} />
          </Link>
        </div>
      ))}
    </div>
  );
}

function CharacterInfo({ character }) {
  const { name, species, image } = character;
  return (
    <div>
        <h1>{name}</h1>
        <h2>{species}</h2>
        <img src={image} />
    </div>
  )
};

export default CharacterList;