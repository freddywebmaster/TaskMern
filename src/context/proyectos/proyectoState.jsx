import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types';
import uuid from 'uuid/dist/v4';

const ProyectoState = props =>{

    const proyectos = [
        { id:1, nombre: 'Galeria CSS' },
        { id:2, nombre: 'Tienda Online' },
        { id:3, nombre: 'Aplicacion Clima' }
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorform: false,
        proyecto: null
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //agregar nuevo proyecto
    const agregarProyecto = (proyecto) =>{
        proyecto.id = uuid();
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    const validarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //seleeciona el proyecto especifico
    const proyectoActual = (proyectoId)=>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //eliminar proyecto
    const eliminarProyecto = (proyectoId) =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorform: state.errorform,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                validarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;