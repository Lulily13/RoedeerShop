import React from 'react';
import {Link} from "react-router-dom";

const Information = () => {
    const help = ["POMOC", "Regulaminy", "Polityka prywatności","Jak dbać o biżuterię"];
    const payment = ["PŁATNOŚĆ I WYSYŁKA", "Płatność i wysyłka", "Zwroty i reklamacje"];
    const contact = ["KONTAKT", "Formularz kontaktowy", "e-mail: roedeer@gmail.com", "instagram: roedeer_art"];

    const helpList = (
        <ul className="information-list">
            {
                help.map(element => {
                    return <Link to={element.replace(" ", "-")} key={help.indexOf(element)} className="help-element click-element information-element">{element}</Link>
                })
            }
        </ul>
    );
    const paymentList = (
        <ul className="information-list">
            {
                payment.map(element => {
                    return <Link to={element.replace(" ", "-")} key={payment.indexOf(element)} className="payment-element click-element information-element">{element}</Link>
                })
            }
        </ul>
    );

    const contactList = (
        <ul className="information-list">
            {
                contact.map(element => {
                    return <li key={contact.indexOf(element)} className="contact-element information-element">{element}</li>
                })
            }
        </ul>
    );

    return (
        <div className="information">
            <ul className="help">{helpList}</ul>
            <ul className="payment">{paymentList}</ul>
            <ul className="contact-me">{contactList}</ul>
        </div>
    );
}

export default Information;