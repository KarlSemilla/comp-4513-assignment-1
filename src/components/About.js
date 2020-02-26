import React from "react";
import NavBar from "./NavBar";
import "../css/About.css";

const About = function(props) {
  return (
    <div>
      <NavBar />
      <div className="About container">
        <h2>About</h2>
        <p>
          This project was designed to emulate a movie browser using a movie
          database. Upon landing on the home page a user could search for a
          movie or just look for all of the listed movies.
        </p>
        <p>This project was created by Derek Nguyen & Karl Semilla</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/KarlSemilla/comp-4513-assignment-1">
            Link
          </a>
        </p>
        <h2>Sources used: </h2>
        <p>
          Background Image:{" "}
          <a href="https://www.freepptbackgrounds.net/holidays/movies-tv-powerpoint-slides">
            Link
          </a>
        </p>
        <p>
          Loading Gif: <a href="https://imgur.com/gallery/NIn8y">Link</a>
        </p>
        <p>
          Fonts: <a href="https://www.fontspace.com/category/logo">Link</a>
        </p>
      </div>
    </div>
  );
};

export default About;
