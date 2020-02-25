import React from "react";
import CastList from "./CastList";
import CrewList from "./CrewList";
import "../css/CastAndCrewList.css";

class CastAndCrewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCastList: true,
      movie: null,
      ready: false
    };
  }

  async componentDidMount() {
    const url =
      "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" +
      this.props.movieId;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movie: data, ready: true });
  }

  renderTabControls() {
    if (this.state.displayCastList) {
      return (
        <div className="TabControls">
          <button className="tab active" onClick={this.switchToCastTab}>
            Cast
          </button>
          <button className="tab" onClick={this.switchToCrewTab}>
            Crew
          </button>
        </div>
      );
    }
    return (
      <div className="TabControls">
        <button className="tab" onClick={this.switchToCastTab}>
          Cast
        </button>
        <button className="tab active" onClick={this.switchToCrewTab}>
          Crew
        </button>
      </div>
    );
  }

  renderListContent() {
    if (this.state.displayCastList) {
      return (
        <CastList
          cast={this.state.movie.production.cast}
          changeToCastView={this.props.changeToCastView}
        />
      );
    }
    return <CrewList crew={this.state.movie.production.crew} />;
  }

  switchToCastTab = e => {
    this.setState({ displayCastList: true });
  };

  switchToCrewTab = e => {
    this.setState({ displayCastList: false });
  };

  render() {
    if (!this.state.ready) {
      return <div className="loading"></div>;
    }
    return (
      <div className="CastandCrew container">
        {this.renderTabControls()}
        {this.renderListContent()}
      </div>
    );
  }
}

export default CastAndCrewList;
