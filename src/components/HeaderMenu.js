import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = function(props){
    return (
        <nav>
            <Link to='/home'>
                {
                    //This image was created by us, but inspired from the W3Schools Home logo.
                }
                <img src="https://cnt-05.content-na.drive.amazonaws.com/cdproxy/templink/XVZDHQ8pLlF_OGCkDXnZmRDVVbKEfgVDRSZ5LwYxloceJxFPc?viewBox=700" alt='Home'/>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
        </nav>
    )
}

export default HeaderMenu;