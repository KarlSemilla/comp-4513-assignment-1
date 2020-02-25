import React from "react";
import Home from "./components/Home";
import CurrentView from "./components/CurrentView.js";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      ready: false
    };
  }

  async componentDidMount() {
    const url =
      "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data, ready: true });
  }

  // async componentDidMount() {
  //   const url =
  //     "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
  //   const MoviesDB = await this.retrieveData("MoviesDB", url);
  //   this.setState({ movies: MoviesDB, ready: true });
  // }

  // retrieveData = async (dbname, dblink) => {
  //   if (localStorage.getItem(dbname) === null) {
  //     const response = await fetch(dblink);
  //     const data = await response.json();
  //     localStorage.setItem(dbname, data);
  //   }
  //   return localStorage.getItem(dbname);
  // };

  render() {
    if (!this.state.ready) {
      return <div className="loading"></div>;
    }
    return (
      <div className="background">
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route
          path="/default"
          exact
          render={() => {
            return <CurrentView movies={this.state.movies} />;
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
