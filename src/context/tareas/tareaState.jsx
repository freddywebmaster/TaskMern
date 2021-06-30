import React, { useReducer } from 'react';

import tareaContext from './tareaContext';

import tareaReducer from './tareaReducer';

import uuid from 'uuid/dist/v4'
import {
    TAREAS_PROYECTO,
    CREAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACUTUALIZAR_TAREA
} from  '../../types'

const TareaState = (props) =>{

    const initialState = {
        tareas: [
            {id: 1, nombre: 'Hacer Layout', estado:true, proyectoId: 1},
            {id: 2, nombre: 'Hacer Responsive', estado:false, proyectoId: 4},
            {id: 3, nombre: 'Agregar Interactividad', estado:false, proyectoId: 3},
            {id: 4, nombre: 'Hacer Deployment', estado:true, proyectoId: 2},
        ],
        tareasProyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    //crear dispatch
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const obtenerTareas = (proyectoId) =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })

    }

    const agregarTarea = tarea =>{
        tarea.id = uuid();
        dispatch({
            type: CREAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const eliminarTarea = ( id ) =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const cambiarEstadoTarea = (tarea) =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    const editarTareaActual = ( tarea ) =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const actualizarTarea = tarea =>{
        dispatch({
            type: ACUTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                editarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;