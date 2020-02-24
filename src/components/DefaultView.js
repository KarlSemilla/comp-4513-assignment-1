import React from "react";
import Favourites from "./Favourites";
import HeaderApp from "./HeaderApp";
import {Link} from 'react-router-dom';
import MovieList from "./MovieList";
import MovieFilters from "./MovieFilters";

class DefaultView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filteredMovies: this.props.movies
        }
    }
    
    render(){
        return(
            <div>
                <HeaderApp/>
                <Favourites/>
                <MovieFilters  movies={this.props.movies} callback={this.getFilterInfo}/>
                <MovieList movies={this.state.filteredMovies}/>
            </div>
        );
    }
    
    getFilterInfo = (movies) => {
        this.setState({
            filteredMovies: movies
        });
        //console.log(this.state.filteredMovies);
    }
}

export default DefaultView;