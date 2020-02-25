import React from "react";
import CastAndCrewList from "./CastAndCrewList";
import "../css/CastView.css";

class CastView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      cast: null
    };
  }

  async fetchData() {
    const url = `https://api.themoviedb.org/3/person/${this.props.castId}?api_key=91f5ef9ce125eea51668c2682d652fe8`;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ cast: data, ready: true });
  }

  render() {
    this.fetchData();
    if (!this.state.ready) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="CastV View">
          <div className="CastInfo container">
            <div className="Card">
              <img
                src={
                  "https://image.tmdb.org/t/p/w185/" +
                  this.state.cast.profile_path
                }
              />
            </div>
            <div className="Info">
              <h3>{this.state.cast.name}</h3>
              <p>Birthday: {this.state.cast.birthday}</p>
              <p>Place of birth: {this.state.cast.place_of_birth}</p>
              <p>Biography: {this.state.cast.biography}</p>
              <p>
                IMDB link:{" "}
                <a
                  href={"https://www.imdb.com/name/" + this.state.cast.imdb_id}
                >
                  Link
                </a>
              </p>
            </div>
            <button className="closeCurrView" onClick={this.clickHandler}>
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
  }

  clickHandler = () => {
    this.props.closeCastView();
  };
}

export default CastView;
