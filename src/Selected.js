import { useLocation } from 'react-router-dom';
import AddForm from './AddForm';


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
        < AddForm 
        name={game.name}
        id={game.id} 
        released={game.released}
        metacritic={game.metacritic}
        background_image={game.background_image}
        />
      </div>
    );
  }
  
  export default Selected;