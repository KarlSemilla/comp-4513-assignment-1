import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background">
        <div className="searchBox container">
          <h1 className="app-name">SimpleDBM</h1>
          <h3>
            Title:
            <input
              type="text"
              name="title"
              placeholder="Enter Movie Name ..."
            ></input>
          </h3>
          <div className="HomeControls">
            <Link to="/default">
              <button>Show Matching Movies</button>
            </Link>
            <Link to="/default">
              <button>Show All Movies</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
