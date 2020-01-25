import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";

const Character = props => {
    // TODO: Add useState to track data from useEffect
    const [ character, setCharacter ] = useState([]);
    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      axios
        .get(`https://rickandmortyapi.com/api/character/${props.id}`)
        .then(response => {
          // setCharacters(response.data);
          setCharacter(response.data.results);
        })
        .catch(err => {
          console.log("there's an issue", err);
        });
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);
    console.log("character2", character);
    return (
       <section className="character">
           return (
             <CharacterCard 
               id = {character.id}
               name = {character.name}
             />
          )
      </section>
    );
  }
  
// const Character = props => {

//     return(
//         <Link to={`/characterList/${props.id}`}>
//             <p>{props.name}</p>
//             <p>hi</p>
//         </Link>
//     )
// }
 export default Character;