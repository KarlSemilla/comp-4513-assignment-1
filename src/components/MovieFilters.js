import React from 'react';

class MovieFilters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            year: {
                before:'',
                after:'',    
                betweenLow:'',
                betweenHigh:'',
            },
            rating: {
                before: '',
                after:'',
                betweenLowSl:'',
                betweenHighSl:'',
            },
            selectedYear: '',
            selectedRating:'',
            filteredMovies: []
        }
    }

    render(){
        return(
            <div className="movieFilters">
                <form className="filterContainer" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <h1>Movie Filters</h1>
                        <label>Title</label><input type="text" id="title" value={this.state.title} onChange={this.handleChange}></input><br/>
                        <h2>Year</h2>
                        <input type="radio" id="before" name="year" value="before" onChange={this.handleRadio}/><label>Before</label>
                        <input type="text" id="before" name="before" value={this.state.year.before} onChange={this.handleChange}></input><br/>
                        <input type="radio" id="after" name="year" value="after" onChange={this.handleRadio}/><label>After</label>
                        <input type="text" id="after" name="after" value={this.state.year.after} onChange={this.handleChange}></input><br/>
                        <input type="radio" id="between" name="year" value="between" onChange={this.handleRadio}/><label>Between</label>
                        <input type="text" id="between" name="betweenLow" value={this.state.year.between} onChange={this.handleChange}></input>
                        <label> and </label>
                        <input type="text" id="between" name='betweenHigh' value={this.state.year.between} onChange={this.handleChange}></input>
                        <h2>Rating</h2>
                        <input type="radio" id="below" name="rating" value="below" onChange={this.handleRadio}/><label>Below</label>
                        <input type="range" min="0" max="100" id="below" name="below" value={this.state.rating.below} onChange={this.handleChange}/><br/>
                        <input type="radio" id="above" name="rating" value="above" onChange={this.handleRadio}/><label>Above</label>
                        <input type="range" min="0" max="100" id="above" name="above" value={this.state.rating.above} onChange={this.handleChange}/><br/>
                        <input type="radio" id="betweenSl" name="rating" value="betweenSl" onChange={this.handleRadio}/><label>Between</label>
                        <input type="range" min="0" max="100" id="betweenSl" name="betweenLowSl" value={this.state.rating.betweenLowSl} onChange={this.handleChange}/>
                        <label> and </label>
                        <input type="range" min="0" max="100" id="betweenSl" name="betweenHighSl" value={this.state.rating.betweenHighSl} onChange={this.handleChange}/>
                        <br/>
                        {/* <input type="submit" value="submit" onClick={this.handleSubmit}/> */}
                        <input type="submit" value="clear"/>
                    </fieldset>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        let target = e.currentTarget;
        if(target.id === "title"){
            this.setState({title:target.value});
            if(this.state.title!=="") {
                this.applyFilters();
                this.props.callback(this.state.filteredMovies);
            } else {
                this.props.callback(this.props.movies);
            }
        } 
        else if(target.id === this.state.selectedYear)
        {
            const updateYear = {...this.state.year};
            updateYear[target.name] = target.value;
            this.setState({year:updateYear});
        }
        else if(target.id === this.state.selectedRating){
            const updateRating = {...this.state.rating};
            updateRating[target.name] = target.value;
            this.setState({rating:updateRating});
        }
    }

    handleRadio = (e) => {
        let target = e.currentTarget;
        if(target.id === "before" || target.id === "after" || target.id === "between"){
            this.setState({selectedYear:target.id});
        }
        else if(target.id === "below" || target.id === "above" || target.id === "betweenSl"){
            this.setState({selectedRating:target.id});
        }
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.title !== "") {
        this.applyFilters();
        this.props.callback(this.state.filteredMovies);
        }
    }

    applyFilters = () =>{
        let tempArray = this.props.movies.filter(this.filterTable);
        this.setState({filteredMovies: tempArray});
    }

    filterTable = (m) => {
        let pattern = this.state.title;
        return !(m.title.includes(pattern));
    }
}

export default MovieFilters;