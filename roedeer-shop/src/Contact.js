import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        // e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.get("email"))
        console.log(formData.get("email"))
        e.target.reset()
    }

    return (
        <section className="contact container" id="contact">

            <div className="contact__column">
                <h2 className="contact__title">Masz pytania?</h2>
                <p className="contact__instruction">Zostaw swój adres e-mail lub skontaktuj się ze mną!</p>
                <div className="contact__details">
                    <a href="mailto:roedeer@gmail.com" className="details__item">
                        <i className="fa-solid fa-envelope"> </i> roedeer@gmail.com
                    </a>
                </div>
            </div>

            <div className="contact__column">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form__field">
                        <label className="form__label" htmlFor="name">Imię</label>
                        <input type="text" className="form__input name" id="name"/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="email">E-mail</label>
                        <input type="email" name="email" className="form__input email" id="email"/>
                    </div>
                    <button type="submit" className="btn btn--primary">Wyślij</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;