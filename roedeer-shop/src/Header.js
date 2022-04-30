import React from "react";
import "./scss/style.scss";
import {Link} from "react-router-dom";

function Header() {
    const nav = ["Biżuteria", "Nowości", "Kupione", "O mnie","Kontakt"];
    const navList = (
        <ul>
            {
                nav.map(element => {
                    return <Link to={element.toLowerCase().replace(" ", "-")} key={nav.indexOf(element)}>{element}</Link>
                })
            }
        </ul>
    );
    return (
        <header className="header__container">
            <img src={require("./images/main-logo.png")} alt={"Page logo with roe deer"} className="header__logo"/>
            <nav className="navigation">{navList}</nav>
        </header>
    );
}

export default Header;