import { useState } from "react"
import { Link } from 'react-router-dom'

const Registro = () => {

    //State para inicio de sesión
    const [usuario, setUsuario] = useState({
        nombre: '',
        email:'',
        password: '',
        confirmar: ''
    })

    //extraer de usuario
    const {nombre, email, password, confirmar} = usuario; 


    const onChange = e => {

        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesión

    const onSubmit = e =>{
        e.preventDefault();


        //Validar que no haya campos vacios

        //Password minimo de 6 caracteres

        //Los dos password sean iguales

        //pasarlo al action

    }
    
    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Registrate</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Pon tu nombre aquí"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Pon tu correo electronico aquí"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Pon tu contraseña aquí"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu contraseña aquí"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input type="submit" className="btn btn-primario btn-block" value="Crear Una Cuenta"/>
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">Iniciar Sesion</Link>
            </div>
        </div>
    )
}

export default Registro