import React from 'react';
import {Link} from "react-router-dom";

const Jewelry = () => {

    return (
        <>
            <div className="main-content jewelry-menu">
                <Link to={"/necklaces"} className="jewelry-earrings jewelry-category">
                    <p className="jewelry-title">Naszyjniki</p>
                    <img src={require("./images/Necklaces.JPG")} alt={"resin necklace"} className="jewelry-img"/>
                </Link>
                <Link to={"/rings"} className="jewelry-earrings jewelry-category">
                    <p className="jewelry-title">Pierścionki</p>
                    <img src={require("./images/Rings.jpg")} alt={"resin ring"} className="jewelry-img"/>
                </Link>
                <Link to={"/earrings"} className="jewelry-earrings jewelry-category">
                    <p className="jewelry-title">Kolczyki</p>
                    <img src={require("./images/Earrings.jpg")} alt={"resin earrings"} className="jewelry-img"/>
                </Link>
                <Link to={"/others"} className="jewelry-earrings jewelry-category">
                    <p className="jewelry-title">Inne</p>
                    <img src={require("./images/Others.JPG")} alt={"resin jewelry"} className="jewelry-img"/>
                </Link>
            </div>
        </>
    )
}

export default Jewelry;