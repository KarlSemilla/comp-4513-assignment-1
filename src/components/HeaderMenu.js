import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = function(props){
    return (
        <nav>
            <Link to='/home'>
                {
                    //This image was created by us, but inspired from the W3Schools Home logo.
                }
                <img src="https://cnt-05.content-na.drive.amazonaws.com/cdproxy/templink/eB7X0uPXodzophb6WrRLC1szK6uVQ5TcyMe-4fr5_0weJxFPc?viewBox=64%2C64&ownerId=A143IVC7X06S6H" alt='Home'/>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
        </nav>
    )
}

export default HeaderMenu;