import React from "react";
import Logo from "../images/react-icon.png";

export default function Nav_Bar() {
    return (
        <nav>
            <img src={Logo} className="nav-icon"/>
            <h3 className="nav-logo-text" >ReactFacts</h3>
            <h4 className="nav-title" >React course - Project 1</h4>
        </nav>
    )
}
