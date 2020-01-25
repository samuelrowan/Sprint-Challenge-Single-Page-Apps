import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

export default function App() {
  const [ characters, setCharacters ] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // setCharacters(response.data);
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log("there's an issue", err);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  return (
    <main>
      <Header />
      <Link to="/characterList">characters</Link>
      <Route
        exact
        path="/characterList"
        render={props => <CharacterList {...props} characters={characters} />}
      />
      <Route
        path="/characterList/:id"
        component={Character} />
    </main>
  );
}
