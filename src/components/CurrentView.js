import React from "react";
import CastAndCrewList from "./CastAndCrewList";
import CastView from "./CastView";
import MovieView from "./MovieView";
import DefaultView from "./DefaultView";
import FavouritesList from "./FavouritesList";
import NavBar from "./NavBar";
import "../css/CurrentView.css";

class CurrentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: null,
      castId: null,
      displayCastView: false,
      displayMovieView: false,
      favourites: []
    };
    this.changeToCastView = this.changeToCastView.bind(this);
  }

  render() {
    if (this.state.displayMovieView) {
      return (
        <div>
          <NavBar />
          <FavouritesList
            favourites={this.state.favourites}
            deleteFavourite={this.deleteFavourite}
          />
          <MovieView
            movieId={this.state.movieId}
            addToFavourites={this.addToFavourites}
            closeMovieView={this.closeMovieView}
            changeToCastView={this.changeToCastView}
          />
        </div>
      );
    }
    if (this.state.displayCastView) {
      return (
        <div>
          <NavBar />
          <FavouritesList
            favourites={this.state.favourites}
            deleteFavourite={this.deleteFavourite}
          />
          <CastView
            castId={this.state.castId}
            movieId={this.state.movieId}
            closeCastView={this.closeCastView}
            changeToCastView={this.changeToCastView}
          />
        </div>
      );
    }
    return (
      <div>
        <NavBar />
        <FavouritesList
          favourites={this.state.favourites}
          deleteFavourite={this.deleteFavourite}
        />
        <div className="CurrentContent">
          <DefaultView
            movies={this.props.movies}
            addToFavourites={this.addToFavourites}
            changeToMovieView={this.changeToMovieView}
          />
        </div>
      </div>
    );
  }

  addToFavourites = newFavourite => {
    let tempArr = [...this.state.favourites, newFavourite];
    this.setState({ favourites: tempArr });
  };

  deleteFavourite = index => {
    let tempArr = [...this.state.favourites];
    tempArr.splice(index, 1);
    this.setState({ favourites: tempArr });
  };

  changeToCastView = id => {
    this.setState({
      castId: id,
      displayCastView: true,
      displayMovieView: false
    });
  };

  changeToMovieView = id => {
    this.setState({
      movieId: id,
      displayCastView: false,
      displayMovieView: true
    });
  };

  closeMovieView = () => {
    this.setState({ displayMovieView: false });
  };

  closeCastView = () => {
    this.setState({ displayCastView: false, displayMovieView: true });
  };
}

export default CurrentView;
