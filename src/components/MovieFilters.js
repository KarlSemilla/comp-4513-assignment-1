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
                below: '',
                above:'',
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
                        <input type="text" id="between" name="betweenLow" value={this.state.year.betweenLow} onChange={this.handleChange}></input>
                        <label> and </label>
                        <input type="text" id="between" name='betweenHigh' value={this.state.year.betweenHigh} onChange={this.handleChange}></input>
                        <h2>Rating</h2>
                        <input type="radio" id="below" name="rating" value="below" onChange={this.handleRadio}/><label>Below</label>
                        <input type="range" min="0" max="10" step="0.1" id="below" name="below" value={this.state.rating.below} onChange={this.handleChange}/><br/>
                        <input type="radio" id="above" name="rating" value="above" onChange={this.handleRadio}/><label>Above</label>
                        <input type="range" min="0" max="10" step="0.1" id="above" name="above" value={this.state.rating.above} onChange={this.handleChange}/><br/>
                        <input type="radio" id="betweenSl" name="rating" value="betweenSl" onChange={this.handleRadio}/><label>Between</label>
                        <input type="range" min="0" max="10" step="0.1" id="betweenSl" name="betweenLowSl" value={this.state.rating.betweenLowSl} onChange={this.handleChange}/>
                        <label> and </label>
                        <input type="range" min="0" max="10" step="0.1" id="betweenSl" name="betweenHighSl" value={this.state.rating.betweenHighSl} onChange={this.handleChange}/>
                        <br/>
                        {/* <input type="submit" value="submit" onClick={this.handleSubmit}/> */}
                        <input type="submit" value="clear" onClick={this.handleClear}/>
                    </fieldset>
                </form>
            </div>
        );
    }

    handleRadio = async (e) => {
        let target = e.currentTarget;
        if(target.id === "before" || target.id === "after" || target.id === "between"){
            await this.setState({selectedYear:target.value});
        }
        else if(target.id === "below" || target.id === "above" || target.id === "betweenSl"){
            await this.setState({selectedRating:target.id});
        }
    }

    handleChange = async (e) => {
        let target = e.currentTarget;
        if(target.id === "title"){
            await this.setState({title:target.value});
            // if(this.state.title !== "") {
            //     this.applyFilters();
            //     this.props.callback(this.state.filteredMovies);
            // } else {
            //     this.setState({filteredMovies: this.props.movies});
            //     this.props.callback(this.props.movies);
            // }

            console.log(this.state.title);
        } 
        else if(target.id === this.state.selectedYear)
        {
            const updateYear = {...this.state.year};
            updateYear[target.name] = target.value;
            await this.setState({year:updateYear});
        }
        else if(target.id === this.state.selectedRating){
            const updateRating = {...this.state.rating};
            updateRating[target.name] = target.value;
            await this.setState({rating:updateRating});
        }
        this.handleFilteredSort();
    }
    
    handleFilteredSort = () => {
        if(this.state.title !== "") {
            this.applyFilters('title');
            this.props.callback(this.state.filteredMovies);
        } 
        else if(this.state.selectedYear !== ""){
            this.applyFilters('year');
            this.props.callback(this.state.filteredMovies);
        }
        else if (this.state.selectedRating !==""){
            this.applyFilters('rating');
            this.props.callback(this.state.filteredMovies);
        }
        else {
            this.setState({filteredMovies: this.props.movies});
            this.props.callback(this.props.movies);
        }
        // if(this.state.selectedYear !== "") {
        //     this.applyFilters();
        //     this.props.callback(this.state.filteredMovies);
        // } else {
        //     this.setState({filteredMovies: this.props.movies});
        //     this.props.callback(this.props.movies);
        // }
    }

    handleClear = () =>{
        this.setState({
            title: '',
            year: {
                before: '',
                after: '',
                betweenLow: '',
                betweenHigh: '',
            },
            rating: {
                below: '',
                above:'',
                betweenLowSl:'',
                betweenHighSl:'',
            },
            selectedRating: '',
            selectedYear: ''
        });
        this.setState({filteredMovies: this.props.movies});
        this.props.callback(this.props.movies);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
    }

    applyFilters = async (type) =>{
        let tempArray = []
        if(type === 'title'){
            tempArray = this.props.movies.filter(this.filterTableByTitle);
        }
        else if(type === 'year'){
            tempArray = this.props.movies.filter(this.filterTableByYear);
        }
        else if(type === 'rating'){
            tempArray = this.props.movies.filter(this.filterTableByRating);
        }
        await this.setState({filteredMovies: tempArray});
    }

    filterTableByTitle = (m) => {
        let pattern = this.state.title;
        return m.title.includes(pattern);
    }

    filterTableByYear = (m) => {
        let pattern = this.state.year[this.state.selectedYear];
        let compareDate = m.release_date.substring(0,4)
        if(this.state.selectedYear === "before"){
            return compareDate <= pattern;
        }
        else if(this.state.selectedYear === "after"){
            return compareDate >= pattern;
        }
        else if(this.state.selectedYear === "between"){
            let low = this.state.year.betweenLow;
            let high = this.state.year.betweenHigh;
            return compareDate >= low && compareDate <= high;
        }
    }

    filterTableByRating = (m) => {
        let pattern = this.state.rating[this.state.selectedRating];
        let compareRating = m.ratings.average;

        if(this.state.selectedRating === "below"){
            return compareRating <= pattern;
        }
        else if(this.state.selectedRating === "above"){
            return compareRating >= pattern;
        }
        else if(this.state.selectedRating === "betweenSl"){
            let low = this.state.rating.betweenLowSl;
            let high = this.state.rating.betweenHighSl;
            return compareRating >= low && compareRating <= high;
        }
    }
}

export default MovieFilters;