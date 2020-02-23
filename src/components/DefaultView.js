import React from "react";
import Favourites from "./Favourites";
import HeaderApp from "./HeaderApp";
import {Link} from 'react-router-dom';
import MovieList from "./MovieList";
import MovieFilters from "./MovieFilters";

class DefaultView extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <HeaderApp/>
                <Favourites/>
                <MovieFilters/>
                <MovieList movies={this.props.movies}/>
                   
            </div>
        );
    }
}

export default DefaultView;