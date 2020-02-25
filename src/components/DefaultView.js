import React from "react";
import MovieList from "./MovieList";
import MovieFilters from "./MovieFilters";
import { isDOMComponent } from "react-dom/test-utils";
import "../css/DefaultView.css";

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: this.props.movies
    };
  }

  render() {
    return (
      <div className="DefaultV View">
        <MovieFilters
          movies={this.props.movies}
          callback={this.getFilterInfo}
          searchedTitle={this.props.title}
        />
        <MovieList
          movies={this.state.filteredMovies}
          changeToMovieView={this.props.changeToMovieView}
          addToFavourites={this.props.addToFavourites}
        />
      </div>
    );
  }

  getFilterInfo = movies => {
    this.setState({
      filteredMovies: movies
    });
  };
}

export default DefaultView;
