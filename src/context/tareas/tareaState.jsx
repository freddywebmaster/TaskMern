import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';
import {
    TAREAS_PROYECTO,
    CREAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACUTUALIZAR_TAREA
} from  '../../types'

const TareaState = (props) =>{

    const initialState = {
        tareasProyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    //crear dispatch
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const obtenerTareas = async (proyecto) =>{
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto } })
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    const agregarTarea = async tarea =>{
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea)
            console.log(resultado);
            dispatch({
                type: CREAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            
        }
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const eliminarTarea = async ( id, proyecto ) =>{
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}})
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const actualizarTarea = async tarea =>{
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
            dispatch({
                type: ACUTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }

    const editarTareaActual = ( tarea ) =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                editarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;