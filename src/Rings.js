import React, {useEffect, useState} from 'react';

const Rings = () => {

    const [rings, setRings] = useState([])

    useEffect(() => {
        const API = "http://localhost:3000/rings/";

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
                setRings([...data])
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <div className="main-content rings-menu">
                {rings.map(element => {
                    return <div key={element.id}>
                        <p>{element.name}</p>
                        <p>{element.price}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Rings;