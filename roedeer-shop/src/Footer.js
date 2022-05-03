import React from 'react';

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
                        <a href="http://instagram.com/roedeer_art" className="social_icon">{<i className="fa-brands fa-instagram"/>}</a>
                        <a href="https://www.facebook.com/roedeer_art-101772572060150" className="social_icon"><i className="fa-brands fa-facebook"/></a>
                        <a href="https://twitter.com/home" className="social_icon"><i className="fa-brands fa-twitter"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;