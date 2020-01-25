import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);
  console.log("characters2", characters);
  return (
     <section className="character-list">
        {characters.map(character => { 
         return (
           <CharacterCard 
             id = {character.id}
             name = {character.name}
           />
        )
       })}
    </section>
  );
}
