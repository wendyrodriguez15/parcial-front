import React from 'react'

const Card = ({nombre, animal}) =>{
    return (
        <>
            <p>Hola {nombre}!</p>
            <p>Sabemos que tu animal favorito es: {animal} </p>
        </>
    )
};
export default Card;