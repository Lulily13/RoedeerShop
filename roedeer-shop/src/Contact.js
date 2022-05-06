import React from 'react';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const customerData = {
            name: formData.get("customer-name"),
            email: formData.get("email")
        }
        e.target.reset()

        fetch("http://localhost:3000/customers/", {
            method: 'POST',
            body: JSON.stringify(customerData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('Error')
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <section className="contact container main-content" id="contact">

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
                        <input type="text" name="customer-name" className="form__input name" id="name"/>
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