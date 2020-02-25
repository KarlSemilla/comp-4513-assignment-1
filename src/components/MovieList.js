import React from "react";
import SingleMovieList from "./SingleMovieList";
import "../css/MovieList.css";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movieList container">
        {this.props.movies.sort(this.compare).map((movie, index) => (
          <SingleMovieList
            poster={movie.poster}
            title={movie.title}
            year={movie.release_date}
            rating={movie.ratings.average}
            key={index}
            id={movie.id}
            changeToMovieView={this.props.changeToMovieView}
            addToFavourites={this.props.addToFavourites}
          />
        ))}
      </div>
    );
  }

  compare = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };
}

export default MovieList;
