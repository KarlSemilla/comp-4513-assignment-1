import React from "react";
import HeaderBar from "./HeaderBar.js";
import HeaderMenu from "./HeaderMenu.js";
import './css/HeaderApp.css';

const HeaderApp = function (props) {
        return(
            <header className="header">
                <HeaderMenu/>
            </header>
        );
    }

export default HeaderApp;