import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer footer__container">
                <div className="footer__general">
                    <p className="footer__shop-name">Roedeer</p>
                    <span className="footer__copy">© 2022 Lulily LTD, All Rights Reserved</span>
                </div>
                <div className="socials">
                    <p className="social__invite">Join me on my socials</p>
                    <div className="socials_icons">
                        <Link to="instagram.com/roedeer_art">
                            <i className="fa-brands fa-instagram"/></Link>
                        <i className="fa-brands fa-facebook"/>
                        <i className="fa-brands fa-twitter"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;