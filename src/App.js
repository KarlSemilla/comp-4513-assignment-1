import React from "react";
import Home from "./components/Home";
import CurrentView from "./components/CurrentView.js";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      ready: false
    };
  }

  async componentDidMount() {
    if (localStorage.getItem("cachedMovies")) {
      this.setState({
        movies: JSON.parse(localStorage.getItem("cachedMovies")),
        ready: true
      });
      return;
    }
    const url =
      "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem("cachedMovies", JSON.stringify(data));
    this.setState({ movies: data, ready: true });
  }

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
        <Route path="/about" exact component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
