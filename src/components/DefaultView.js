import React from "react";
import Favourites from "./Favourites";
import HeaderApp from "./HeaderApp";
import {Link} from 'react-router-dom';
import MovieList from "./MovieList";


class DefaultView extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <HeaderApp/>
                <Favourites/>
                <MovieList movies={this.props.movies}/>
<<<<<<< HEAD
                   
=======
>>>>>>> 5696b9cb9563ba768c77615dfada1eca0447860f
            </div>
        );
    }
}

export default DefaultView;