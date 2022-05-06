import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="about-container">
                <div>Roedeer to mała pracownia artystyczna, w której powstaje ręcznie tworzona delikatna biżuteria z
                    żywicy epoksydowej i prawdziwych suszonych roślin. Każdy przedmiot jest unikalny tak jak
                    niepowtarzalna jest natura. Za Roedeer stoję ja – Sara. Tworzę projekty, kolekcje oraz biżuterię,
                    zbieram i suszę rośliny, rozmawiam z Wami, obsługuję sklep internetowy, wykonuję zdjęcia produktów,
                    pakuję i wysyłam zamówienia. W swoją markę wkładam całe serce, zaangażowanie i doświadczenie.
                </div>
                <Link to={"/new"} className="about-collection">Poznaj naszą nową kolekcję</Link>
            </div>
        </>
    )
}

export default About;