import React from 'react';

class MovieFilters extends React.Component{
    render(){
        return(
            <div className='movieFilters' onSubmit={this.handleSubmit}>
                <h1>Movie Filters</h1>
                <form className="filterContainer" {/*Add onChange{this.handleChange}*/}>
                    <input type='text' value=''></input>
                </form>
            </div>
        );

        handleSubmit = (e) => {
            e.preventDefault();
            let values = `Current vales are 
                 ${this.state.company.name} 
                 ${this.state.company.sector} 
                 ${this.state.company.comments}`;
            alert(values);
        }
    }
}

export default MovieFilters;