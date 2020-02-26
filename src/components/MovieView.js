import React from "react";
import CastAndCrewList from "./CastAndCrewList";
import "../css/MovieView.css";

class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: null, ready: false };
  }

  async componentDidMount() {
    const url =
      "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" +
      this.props.movieId;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data, ready: true });
  }

  render() {
    if (!this.state.ready) {
      return <div className="loading"></div>;
    }
    return (
      <div className="MovieV View">
        <div className="MovieInfo container">
          <div className="Card">
            <img
              src={"https://image.tmdb.org/t/p/w185/" + this.state.movie.poster}
            />
            <button className="addToFav" onClick={this.likeButtonHandler}>
              Add to Favorites
            </button>
          </div>
          <div className="Info">
            <h3>{this.state.movie.title}</h3>
            <p>Release date: {this.state.movie.release_date}</p>
            <p>Revenue: {this.state.movie.revenue}</p>
            <p>Runtime: {this.state.movie.runtime}</p>
            <p>Tag Line: {this.state.movie.tagline}</p>
            <p>Overview: {this.state.movie.details.overview}</p>
            <p>
              IMDB Link:{" "}
              <a
                href={"https://www.imdb.com/title/" + this.state.movie.imdb_id}
              >
                Link
              </a>
            </p>
            <p>
              TMDB Link:{" "}
              <a
                href={
                  "https://www.themoviedb.org/movie/" + this.state.movie.tmdb_id
                }
              >
                Link
              </a>
            </p>
            <p>Ratings: {this.state.movie.ratings.average}★</p>
            <p>
              Companies:{" "}
              {this.outputArray(this.state.movie.production.companies, "name")}
            </p>
            <p>
              Countries:{" "}
              {this.outputArray(
                this.state.movie.production.countries,
                "iso_3166_1"
              )}
            </p>
            <p>
              Genres:{" "}
              {this.outputArray(this.state.movie.details.genres, "name")}
            </p>
          </div>
          <button className="closeCurrView" onClick={this.closeMovieView}>
            X
          </button>
        </div>
        <CastAndCrewList
          movieId={this.props.movieId}
          changeToCastView={this.props.changeToCastView}
        />
      </div>
    );
  }

  closeMovieView = () => {
    this.props.closeMovieView();
  };

  likeButtonHandler = () => {
    this.props.addToFavourites(this.state.movie.poster);
  };

  outputArray(array, property) {
    if (array) {
      let result = "";
      for (let i of array) {
        result += i[property] + ", ";
      }
      result = result.slice(0, -2);
      return result;
    } else {
      return "Missing Information";
    }
  }
}

export default MovieView;
