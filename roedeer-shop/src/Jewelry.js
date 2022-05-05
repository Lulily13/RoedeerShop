import React from 'react';

const Jewelry = () => {

    // fetch(api_url, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    // })
    //     .then(resp => {
    //         if (resp.ok) {
    //             return resp.json()
    //         }
    //         throw new Error('response code = bad')
    //     })
    //     .then(data => {
    //         console.log(data)
    //         setCards((prev) => prev.concat(data))
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });


    return (
        <>
            <div className="necklaces">{"necklaces"}</div>
            <div className="rings">{"RINGS"}</div>
            <div className="earrings">{"earrings"}</div>
            <div className="others">{"others"}</div>
        </>
    )
}

export default Jewelry;