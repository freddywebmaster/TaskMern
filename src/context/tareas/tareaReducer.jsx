import {
    TAREAS_PROYECTO,
    CREAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACUTUALIZAR_TAREA
} from '../../types';


const fn = (state, action) => {
    switch(action.type){

        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasProyecto: state.tareas.filter(tarea=> tarea.proyectoId === action.payload)
            }
        case CREAR_TAREA:
            return{
                ...state,
                tareas: [action.payload, ...state.tareas],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }

        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload )
            }
        case ACUTUALIZAR_TAREA:
        case ESTADO_TAREA:
                return{
                    ...state,
                    tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                    tareaseleccionada: null
                }
        case TAREA_ACTUAL:
                return{
                    ...state,
                    tareaseleccionada: action.payload
                }
        default:
            return state;
    }
}

export default fn;