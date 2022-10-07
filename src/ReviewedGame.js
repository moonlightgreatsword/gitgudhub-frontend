import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const ReviewedGame = (props) => {
    let game = useLocation().state.g
    const [editTerm, setEditTerm] = useState("")
    // const [game, setGameResults] = useState(gameProp)
    
    // useLocation().state.g
    // setGameResults(useLocation().state.g)

    // const game = useLocation().state.g

    const handleChange = (e) => {
      setEditTerm(e.target.value)
    }

    const deleteReview = (g, r) => {
        fetch(process.env.REACT_APP_BACKEND_URL + `/games/${g._id}/${r._id}`, {
			method: 'DELETE',
        })
    }

    const editReview = (g, r) => {
      fetch(
       `${process.env.REACT_APP_BACKEND_URL}/games/${g._id}/${r._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            description : editTerm
        }),
        headers: {
          'Content-Type': 'application/json'
      }
        }
      )
    };

   
    console.log(game._id)
    return (
      <div id="display-review">
        <h1>{game.name}</h1>
        <img src={game.backgroundImage} alt='screenshot'></img>
        <p>Released: {game.released}</p>
        <p>Metacritic Rating: {game.metacritic}</p>
        <h3>Review(s):</h3>
        <ul className='review-info'>
          { 
            game.reviews.map(review => (
                <li key={review._id} className="lineitem">
                    <p>Author: {review.author}</p>
                    <p>Description: {review.description}</p>
                    <form id = 'deleteReview' action='/reviewed'>
                        <input type="submit" value="DELETE REVIEW" onClick={() => deleteReview(game, review)}/> 
                    </form>
                    <form id='editReview' action='/reviewed'>
                        <input type="text" name="description" id="description" placeholder={'Edit Here'} onChange={handleChange} required/>
                        <input type="submit" value="SUBMIT EDIT" onClick={() => editReview(game, review)} />
                    </form>
                </li>
            ))
          }
        </ul>
      </div>
    );
  }
  
  export default ReviewedGame;