import React from 'react'

const ListadoDatos = () => {

    const datos ={
        nombres:"Ausberto de Jesus", 
        apellidos: 'Rodriguez Leal',
        direccion:"Cra 90a #2-40", 
        telefono: 3015861097,
        correo:"jesus_rodriguez@hotmail.com", 
        edad: 61
    }

    return (
        <>
        <h2>Contacto seleccionado: <span>{datos.nombres}</span></h2>
            <table className='listado-datos espacio contenedor-datos'>
            {datos.length === 0
            ?<tr className='dato'>No hay datos</tr>

            :<>
                <tr className='dato'>
                    <th>Nombre completo:</th>
                        <td></td>
                        <td>{datos.nombres}</td>
                        <td>{datos.apellidos}</td>
                </tr>
                <tr className='dato'>
                    <th>Dirección:</th>
                        <td>{datos.direccion}</td>
                </tr>
                <tr className='dato'>
                    <th>Telefono:</th>
                <td>{datos.telefono}</td>
                </tr>
                <tr className='dato'>
                    <th>Correo:</th>
                <td>{datos.correo}</td>
                </tr>
                <tr className='dato'>
                    <th>Edad:</th>
                <td>{datos.edad}</td>
                </tr>
            </>
            }
            <div className='acciones'>
        <button
            type='button'
            className='btn btn-primario'
        >Editar Datos</button>

        <button
            type='button'
            className='btn btn-secundario'
        >Eliminar Contacto</button>
            </div>
            </table>
            
        </>
    )
}

export default ListadoDatos
