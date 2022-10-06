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
        {/* <form action="/" method="POST">
          <input type="hidden" name="name" id="name" value={game.name}/>
          <input type="hidden" name="" id="gameId"  value={game.id}/>
          <input type="hidden" name="released" id="released"  value={game.released}/>
          <input type="hidden" name="metacritic" id="metacritic"  value={game.metacritic}/>
          <input type="text" name="author" id="author"  placeholder='Enter Your Name Here' required/>
          <input type="text" name="description" id="description"  placeholder='Write Review Here' required/>
          <input type="Submit" value="Add a Review" />
        </form> */}
        < AddForm 
        name={game.name}
        id={game.id} 
        released={game.released}
        metacritic={game.metacritic}
        backround_image={game.background_image}
        />
      </div>
    );
  }
  
  export default Selected;