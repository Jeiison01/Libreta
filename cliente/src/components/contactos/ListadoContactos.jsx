  import {useContext, useEffect} from 'react'
  import contactoContext from '../../context/contactos/contactoContext'

const ListadoContactos = () => {
        
    //Extraer contactos del state inicial
    const contactosContext = useContext(contactoContext);
    const {contactos, obtenerContactos} = contactosContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerContactos();
    }, [])

    //revisar si contactos tiene contenido
    if(contactos.length === 0 ) return null;



    return (
        <ul className='listado-contactos'>
            {contactos.map((contacto => (
            <li>
                <button
                type="button"
                className='btn btn-blank'
                >{contacto.nombre} </button>
            </li>
            )))}
        </ul>
    )
}

export default ListadoContactos
