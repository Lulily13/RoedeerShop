import React, {useEffect, useState} from 'react';

const Necklaces = () => {

    const [necklaces, setNecklaces] = useState([])

    useEffect(() => {
        const API = "http://localhost:3000/necklaces/";

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
                setNecklaces([...data])
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <div className="main-content necklaces-menu">
                {necklaces.map(element => {
                    return <div key={element.id}>
                        <p>{element.name}</p>
                        <p>{element.price}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Necklaces;