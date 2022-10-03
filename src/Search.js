import React, { Component } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Search  = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])
  const searchURL = "https://api.rawg.io/api/games?" + `key=${process.env.REACT_APP_RAWG_API_KEY}&`+ "search="

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(searchURL+slug)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }
  return (
      <div className="game-search">
        <h1>Search for a Game</h1>
        <form onSubmit={onSubmit}>
          <label>Search</label>
          <input
            id="searchInput"
            type="text"
            placeholder="What's the Name of the Game"
            value={searchTerm}
            onChange={handleChange}
          />
          <input type="submit" value="Find Games" />
        </form>
        <div className="results-container">
          <ul>
          {gameResults.map(game => (
              <li key={game.id}>
                <Link to={`/selected/${game.id}`} state={{ game }}>
                  <h3>{game.name}</h3>
                  <img src={game.background_image} alt="game"/>
                </Link>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    );
}

export default Search;
