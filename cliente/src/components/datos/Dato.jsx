import React from 'react'

const Dato = ({dato}) => {
    return (
        <>
        <li className='dato sombra'>
            <h1>Nombre completo: <span className='estado'>{dato.nombres} {dato.apellidos} </span></h1>
            <p>{dato.direccion}</p>
            <p>{dato.telefono}</p>
            <p>{dato.correo} </p>
        </li>
            
    </>
    )
}

export default Dato