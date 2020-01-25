import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";
import characterList from "./CharacterList";

const Character = props => {
    const character = props.characters.find(
        thing => `${thing.id}` === props.match.params.id
      );
    return (
        <div>
          <p>{props.character.name}</p>
        </div>
      );

    // useEffect(() => {
    //     const id = props.match.params.id;
    //   },[props.match.params.id]);
    //   return(
    //             <Link to={`/characterList/${props.id}`}>
    //                 <p>{props.name}</p>
    //                 <p>hi</p>
    //             </Link>
    //         )
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