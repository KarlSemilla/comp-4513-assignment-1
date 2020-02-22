import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import { render } from '@testing-library/react';
import {Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <main>
        <Route path='/' exact component={Home} />
      </main>
    );
  }
}

export default App;
