import React from "react";
import { Link, withRouter } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    render(){
        let imgUrl = "https://cnt-05.content-na.drive.amazonaws.com/cdproxy/templink/fP8hHUYqxOvgCvpeUYDgyF1-glN1DarP1AcFbUGE1kEeJxFPc?viewBox=1406%2C937&ownerId=A143IVC7X06S6H";
        return(
            <div className = 'background'
                style = {{ backgroundImage: `url(${imgUrl})`,
                height: '800px',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className = 'searchBox'>
                <h1>Movie Browser</h1>
                <h3>Title: <input type='text' name="titleIn"></input></h3>
                <Link to='/default'><button>Show Matching Movies</button></Link>
                <Link to='/default'><button>Show All Movies</button></Link>
            </div>

            </div>
        )

    }
}

export default Home;