import React from 'react';

const Jewelry = () => {

    const getJewelry = () => {
        fetch( "http://localhost:3000/jewelry/", {
            method: 'GET',
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('argh')
            })
            .then(data => {
                console.log(data)
                const getData = () => {

                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <div onClick={getJewelry} className="main-content">
                <div className="necklaces">{"necklaces"}</div>
                <div className="rings">{"RINGS"}</div>
                <div className="earrings">{"earrings"}</div>
                <div className="others">{"others"}</div>
            </div>
        </>
    )
}

export default Jewelry;