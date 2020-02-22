import React from "react";
import SingleMovieList from "./SingleMovieList";
import './css/MovieList.css'

class MovieList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='movieList'>
                <table>
                    <caption>List of Movies</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.movies.map((movie, index) =>
                        <SingleMovieList poster={movie.poster} 
                            title={movie.title}
                            year={movie.release_date}
                            rating={movie.ratings.average}
                            key={index}
                        />
                    )}
                    </tbody>
                </table>
            </div>

        );
    }

    // async componentDidMount() {
    //     //<Insert loading gif here>
    //     try{
    //       const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
    //       const response = await fetch(url);
    //       const jsonData = await response.json();
    //       this.setState({photos: jsonData});
    //     }
    //     catch(error){
    //       console.error(error)
    //     }
    //   }
}

export default MovieList;