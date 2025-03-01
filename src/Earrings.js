import React, {useEffect, useState} from 'react';

const Earrings = () => {

    const [earrings, setEarrings] = useState([])

    useEffect(() => {
        const API = "http://localhost:3000/earrings/";

        fetch(API, {
            method: 'GET',
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('Error')
            })
            .then(data => {
                setEarrings([...data])
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <div className="main-content earrings-menu">
                {earrings.map(element => {
                    return <div key={element.id}>
                        <p >{element.name}</p>
                        <p>{element.price}</p>
                    </div>
                })}
            </div>
        </>
    )
}


export default Earrings;