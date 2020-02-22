import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = function(props){
    return (
        <nav>
            <Link to='/home'>
                {
                    //This image was created by us, but inspired from the W3Schools Home logo.
                }
                <img src="https://i.imgur.com/oibKKNy.jpg" alt='Home'/>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
        </nav>
    )
}

export default HeaderMenu;