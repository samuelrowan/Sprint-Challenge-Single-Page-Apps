import React, { useState, useEffect } from "react";
import axios from 'axios';


const CharacterCard = (props) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      setCharacter(response.data);
    })
    .catch(error => {
      console.log("Sir, there's been a problem", error);
    });
  },[props.match.params.id])
  if(!character) {
    return <div>Hold your horses...</div>
  }

  console.log(character);

  const { name, species, image } = character;
  return (
    <div>
        <h1>{name}</h1>
        <h2>{species}</h2>
        <img src={image} />
    </div>
  )
}

export default CharacterCard;