import React from "react";
import "./scss/style.scss";
import {Link} from "react-router-dom";

function Header() {

    // const unrollMenu = (e) => {
    //     // if (e.target.to.element.link !== "jewelry") {
    //     //     return
    //     // }
    //     return (
    //         <a href="#">{slideOuts}</a>
    //     )
    // }


    return (
        <header className="header__container">
            <div className="logo__container">
                <a href="http://localhost:3000" className="logo__link">Page logo with roe deer</a>
            </div>
            <nav className="navigation">
                <Link to={"/jewelry"} className="nav-element">Biżuteria
                    <div className="jewelry-elements">
                        <Link to={"/necklaces"} className="jewelry-element">Naszyjniki</Link>
                        <Link to={"/rings"} className="jewelry-element">Pierścionki</Link>
                        <Link to={"/earrings"} className="jewelry-element">Kolczyki</Link>
                        <Link to={"/others"} className="jewelry-element">Inne</Link>
                    </div>
                </Link>
                <Link to={"/new"} className="nav-element">Nowości</Link>
                <Link to={"/how-to-buy"} className="nav-element nav-buy">Jak kupować</Link>
                <Link to={"/contact"} className="nav-element">Kontakt</Link>
            </nav>
        </header>
    );
}

export default Header;