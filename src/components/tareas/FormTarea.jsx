import React,{ useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    const proyectosContext =  useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea} = tareasContext;

    useEffect(()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    },[tareaseleccionada])

    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    const {nombre} = tarea;

    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        if (tareaseleccionada === null) {
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }else{
            actualizarTarea(tarea)
        }

        obtenerTareas(proyectoActual.id);


        guardarTarea({
            nombre: ''
        });
    }
    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value={tareaseleccionada ? 'Editar Tarea' : "Guardar Tarea"}
                        className="btn btn-blank btn-block"
                    />
                </div>
            </form>
            {
                errortarea ? <p className="mensaje error">Llena el campo</p> : null
            }
        </div>
     );
}
 
export default FormTarea;