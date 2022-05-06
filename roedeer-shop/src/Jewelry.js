import React from 'react';
import {Link} from "react-router-dom";

const Jewelry = () => {

    return (
        <>
            <div className="main-content jewelry-menu">
                <div className="jewelry-necklaces jewelry-category">
                    <Link to={"/necklaces"} className="jewelry-link">Naszyjniki </Link>
                    <img src={require("./images/Necklaces.JPG")} alt={"resin necklace"} className="jewelry-img"/>
                </div>
                <div className="jewelry-rings jewelry-category">
                    <Link to={"/rings"} className="jewelry-link">Pierścionki</Link>
                    <img src={require("./images/Rings.jpg")} alt={"resin ring"} className="jewelry-img"/>
                </div>
                <div className="jewelry-earrings jewelry-category">
                    <Link to={"/earrings"} className="jewelry-link">Kolczyki</Link>
                    <img src={require("./images/Earrings.jpg")} alt={"resin earrings"} className="jewelry-img"/>
                </div>
                <div className="jewelry-others jewelry-category">
                    <Link to={"/others"} className="jewelry-link">Inne</Link>
                    <img src={require("./images/Others.JPG")} alt={"resin jewelry"} className="jewelry-img"/>
                </div>
            </div>
        </>
    )
}

export default Jewelry;