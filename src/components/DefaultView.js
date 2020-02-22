import React from "react";
import Favourites from "./Favourites";
import HeaderApp from "./HeaderApp";
import {Link} from 'react-router-dom';


class DefaultView extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <HeaderApp/>
                <Favourites/>
            </div>
        );
    }
}

export default DefaultView;