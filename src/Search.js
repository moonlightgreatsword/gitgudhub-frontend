import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      API request format:
      GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
      GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
      Docs: https://api.rawg.io/docs
      */
      baseURL: "https://api.rawg.io/api/games?",
      apiKey: `key=${process.env.REACT_APP_RAWG_API_KEY}&`,
      gamesQuery: "search=",
      searchInput: "",
      // later on we can determine whether to add additional parameters like page size, genres, etc.
      searchURL: "",
      gallery : []
    };
  }
  handleChange = (event) => {
    this.setState({
      // we're grabbing the element or elements and dynamically setting the input value to the key corresponding to the input id of the same name in this.state
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // keep the page from refreshing on submit
    event.preventDefault();
    this.setState(
      {
        // builds out our search url from the pieces we've assembled
        searchURL:
          this.state.baseURL +
          this.state.apiKey +
          this.state.gamesQuery +
          this.state.searchInput,
      },
      () => {
        // we fetch the url from the api
        fetch(this.state.searchURL)
          // .then waits till the fetch is complete
          .then((response) => {
            return response.json();
          })
          .then(
            (json) => this.setState({
              gallery : json.results
            }),
            (err) => console.log(err)
          );
      }
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input
            id="searchInput"
            type="text"
            placeholder="What's the Name of the Game"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
          <input type="submit" value="Find Games" />
        </form>
        <div id='gallery'>
          {this.state.gallery.map(function(d, idx){
            return (
            <li key={idx}>
              {d.name},
              {d.id}, 
              <button className="inspect" onClick={() => console.log('button clicked')}>Inspect Game</button>
            </li>)})}
        </div>
      </div>
    );
  }
}

export default Search;
