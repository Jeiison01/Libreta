import React, {useReducer} from 'react'
import contactoContext from './contactoContext'
import contactoReducer from './contactoReducer'
import {
    FORMULARIO_CONTACTO,
    OBTENER_CONTACTOS,
    CREAR_CONTACTO
} from '../../types';


const ContactoState = props => {
    const contactos = [
        { id:1, nombre: 'Jesus Rodriguez'},
        { id:2, nombre: 'Maria Duran'},
        { id:3, nombre: 'Vale Rodriguez'},
        { id:4, nombre: 'Martha llega'}
]

    const initialState ={
        contactos : [],
        formulario : false

    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(contactoReducer, initialState)

    //Serie de funciones para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_CONTACTO
        })
    }

    //Obtener los contactos
    const obtenerContactos = () =>{
        dispatch({
            type: OBTENER_CONTACTOS,
            payload: contactos
        })
    }

    return(
        <contactoContext.Provider
            value={{
                contactos: state.contactos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerContactos
            }}
        >
            {props.children}
        </contactoContext.Provider>
    )
}

export default ContactoState
