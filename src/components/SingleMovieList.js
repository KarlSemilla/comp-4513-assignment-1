import React from 'react';

class SingleMovieList extends React.Component{
    constructor(props){
        super(props);
    }    

    render(){
        return(
            <tr className={this.props.title}>
                <td><img src={'https://image.tmdb.org/t/p/w92/' + this.props.poster} alt={this.props.title}/></td>
                <td>{this.props.title}</td>
                <td>{this.props.year}</td>
                <td>{this.props.rating}</td>
            </tr>
        );
    }
}

export default SingleMovieList;