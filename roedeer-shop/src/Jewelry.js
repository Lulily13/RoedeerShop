import React from 'react';

const Jewelry = () => {
    const jewelry = ["Biżuteria", "Nowości", "Kupione", "O mnie","Kontakt"];
    const jewelryList = (
        <ul>
            {
                jewelry.map(element => {
                    return <div> key={jewelry.indexOf(element)}>{element}</div>
                })
            }
        </ul>
    )
    return (
        <>
            <div className="jewelry">{jewelryList}</div>
        </>
    )
}

export default Jewelry;