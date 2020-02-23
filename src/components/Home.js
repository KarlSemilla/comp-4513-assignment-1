import React from "react";
import './css/Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div className = 'background'>
                <div className = 'searchBox'>
                    <h1>Movie Browser</h1>
                    <h3>Title: 
                        <input type='text' name="titleIn"></input>
                    </h3>
                    <Link to='/default'>
                        <button>Show Matching Movies</button>
                    </Link>
                    <Link to='/default'>
                        <button>Show All Movies</button>
                    </Link>
                </div>
                <p className='photoCredit'>Photo Credit: Karl Semilla</p>
            </div>
        )

    }
}

export default Home;