import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import DefaultView from './components/DefaultView.js';
import About from './components/About.js';
import { render } from '@testing-library/react';
import {Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {movies: []};

  }

  render(){
    return (
      <main>
        <Route path='/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/default' exact render={(props)=>
            <DefaultView 
              movies={this.state.movies}/>
          }
        />
        <Route path='/about' exact component={About}/>
      </main>
    );
  }

  async componentDidMount() {
    try{
      const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState({photos: jsonData});
    }
    catch(error){
      console.error(error)
    }
  }
}

export default App;
