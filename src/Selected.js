import { useLocation } from 'react-router-dom';


const Selected = (props) => {
    const game = useLocation().state.game
    return (
      <div>
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Metacritic Rating: {game.metacritic}</p>
        <h3>Genre(s):</h3>
          { 
            game.genres.map(g => `${g.name} | `)
          }
        
        <img src={game.short_screenshots[0].image} alt='screenshot'></img>
      </div>
    );
  }
  
  export default Selected;