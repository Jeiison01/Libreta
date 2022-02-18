import React from 'react'

const FormDatos = () => {
    return (
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        className='input-text2'
                        placeholder='Ingrese el nombre completo...'
                        name="nombre"
                    />
                </div>
                <div className='contenedor-input'>
                <label>Dirección: </label>
                    <input
                        type="text"
                        className='input-text2'
                        placeholder='Ingrese la dirección'
                        name="direccion"
                    />
                </div>
                <div className='contenedor-input'>
                <label>Teléfono: </label>
                    <input
                        type="number"
                        className='input-text2'
                        placeholder='Ingrese el teléfono'
                        name="telefono"
                    />
                </div><div className='contenedor-input'>
                <label>Email: </label>
                    <input
                        type="email"
                        className='input-text2'
                        placeholder='Ingrese el correo'
                        name="email"
                    />
                </div><div className='contenedor-input'>
                <label>Edad: </label>
                    <input
                        type="number"
                        className='input-text2'
                        placeholder='Ingrese la edad'
                        name="edad"
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type="submit"
                        className='btn btn-primario btn-submit btn-block'
                        value="Agregar Datos"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormDatos
