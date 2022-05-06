import React from 'react';

const Necklaces = () => {

    return (
        <>
            <div className="main-content necklaces-menu">
                naszyjnik
            </div>
        </>
    )
}

export default Necklaces;
// const getJewelry = (data) => {
//     const API = "http://localhost:3000/jewelry";
//
//     fetch(API, {
//         method: 'GET',
//     })
//         .then(resp => {
//             if (resp.ok) {
//                 return resp.json()
//             }
//             throw new Error('Error')
//         })
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }