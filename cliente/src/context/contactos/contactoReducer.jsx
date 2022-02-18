import {
    FORMULARIO_CONTACTO,
    OBTENER_CONTACTOS
} from '../../types';

export default (state, action) =>{
    switch(action.type){
        case FORMULARIO_CONTACTO:
            return{
                ...state,
                formulario: true
            }

        case OBTENER_CONTACTOS:
            return{
                ...state,
                contactos: action.payload
            }
        default:
            return state;
    }
}
