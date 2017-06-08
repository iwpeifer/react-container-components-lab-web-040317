import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from "./MovieReviews"

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ""
    }

    this.handleSearch = this.handleSearch.bind(this)
  }


  handleSearch(event){

    const searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${event.target.value}`
                + `api-key=${NYT_API_KEY}`;

    fetch(searchURL).then(response => response.json()).then(reviews => this.setReviews(reviews))

  }

  setReviews(response) {
    this.setState({
      reviews: response.results
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form>
          <input type="text" />
          <input type="submit" onClick={this.handleSearch}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
