import React from "react";
import SingleMovieList from "./SingleMovieList";

class MovieList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <table className='movieList'>
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
                {this.props.movies.map((m, index) =>
                    <SingleMovieList poster={this.props.movies[index].poster} 
                        title={this.props.movies[index].title}
                        year={this.props.movies[index].release_date}
                        rating={this.props.movies[index].rating}
                        key={index}
                    />
                )}
                </tbody>
            </table>

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