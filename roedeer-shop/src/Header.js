import React from "react";
import "./scss/style.scss";
import {Link} from "react-router-dom";

function Header() {

    const nav = [
        {
          name: "Biżuteria",
          link: "jewelry"
        },
        {
            name: "Nowości",
            link: "new"
        },
        {
            name: "Kupione",
            link: "sold"
        },
        {
            name: "O mnie",
            link: "about-me"
        },
        {
            name: "Kontakt",
            link: "contact"
        }
        ]

    const navList = (
        <ul>
            {
                nav.map(element => {
                    return <Link to={element.link} key={nav.indexOf(element)}>{element.name}</Link>
                })
            }
        </ul>
    );

    return (
        <header className="header__container">
            <div className="logo__container">
                <a href="http://localhost:3000" className="logo__link">Page logo with roe deer</a>
            </div>
            <nav className="navigation">{navList}</nav>
        </header>
    );
}

export default Header;