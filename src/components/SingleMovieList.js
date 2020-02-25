import React from "react";

class SingleMovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MovieListItem">
        <img
          src={"https://image.tmdb.org/t/p/w92/" + this.props.poster}
          alt={this.props.title}
        />
        <p>{this.props.title}</p>
        <p>{this.props.year}</p>
        <p>{this.props.rating}★</p>
        <button className="heart-button" onClick={this.clickLikeHandler}>
          ♥
        </button>
        <button className="view-button" onClick={this.clickViewHandler}>
          View
        </button>
      </div>
    );
  }

  clickViewHandler = () => {
    this.props.changeToMovieView(this.props.id);
  };

  clickLikeHandler = () => {
    this.props.addToFavourites(this.props.poster);
  };
}

export default SingleMovieList;
