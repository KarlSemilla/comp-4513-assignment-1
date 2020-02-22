import React from 'react';

const SingleMovieList = function(props) {
    return(
        <tr>
            <th><img src={'https://image.tmdb.org/t/p/w92/' + this.props.poster} alt={this.props.title}/></th>
            <th>{this.props.title}</th>
            <th>{this.props.year}</th>
            <th>{this.props.title}</th>
        </tr>
    );
}

export default SingleMovieList;