import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class ReviewedGallery extends Component {
	// add state
	constructor(props) {
		super(props);
		this.state = {
			games: [],
		};
	}
	// componentDidMount - runs only once when the comp is mounted for the first time
	componentDidMount() {
		this.getReviewed();
	}

    getReviewed = () => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/games/reviewed`, {
			// credentials: "include"
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return [];
				}
			})
			.then((data) => {
				// console.log('data', data.games);
				// just a quick fix for this to work (data returns undefined...)
				if (data === []) {
					this.setState({ games : data })
				} else {
					this.setState({ games: data.games });
				}
			});
	};
    render() {
        // console.log(this.state.games[0])
        return (
            <div className='reviewedGallery'>
                {this.state.games.map(g => (
                    <li key={g.id}>
                        {/* < a href={`${process.env.REACT_APP_BACKEND_URL}/games/reviewed/${g._id}`}>
                            <h3>{g.name}</h3>
                            <img src={g.backgroundImage} alt="game"/> 
                        </a> */}
                        <Link to={`/reviewed/${g._id}`} state={{ g }}>
                            <h3>{g.name}</h3>
                            <img src={g.backgroundImage} alt="game"/>
                        </Link>
                    </li>
                    ))
                }
            </div>
    )}
}

export default ReviewedGallery;