import {
    TAREAS_PROYECTO,
    CREAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACUTUALIZAR_TAREA
} from '../../types';


const fn = (state, action) => {
    switch(action.type){

        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasProyecto: action.payload
            }
        case CREAR_TAREA:
            return{
                ...state,
                tareasProyecto: [action.payload, ...state.tareasProyecto],
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
                tareasProyecto: state.tareasProyecto.filter(tarea => tarea._id !== action.payload )
            }
        case ACUTUALIZAR_TAREA:
                return{
                    ...state,
                    tareasProyecto: state.tareasProyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
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