import {useContext, useState} from 'react';
import proyectoContext from '../../context/contactos/contactoContext'

const NuevoContacto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectosContext;

    //State para Proyecto
    const [contacto, setContacto] = useState({
        nombre:''
    });

    //Extraer el nombre de proyecto
    const {nombre} = contacto;

     //Lee los contenidos del input
     const onChangeContacto = e => {
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario envia un proyecto
    const onSubmitContacto = e => {
        e.preventDefault();

        //Validar el proyecto

        //agregar al state

        //Reiniciar el form
    }

    return ( 
        
        <>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => mostrarFormulario()}
        >
            Nuevo Contacto
        </button>
        {formulario ?(
                <form
                className="formulario-nuevo-contacto"
                onSubmit={onSubmitContacto}
            >
                <input
                type="text"
                className="input-text"
                placeholder="Nombre Corto de Contacto"
                name="nombre"
                value={nombre}
                onChange={onChangeContacto}
                />
    
                <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Contacto"
                />
            </form>
            )
            : null
        }
        
        </>
     );
}
 
export default NuevoContacto;