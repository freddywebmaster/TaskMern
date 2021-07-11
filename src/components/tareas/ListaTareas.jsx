import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const ListaTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {tareasProyecto} = tareasContext;

    if(!proyecto) return <h1>Selecciona un proyecto</h1>

    const [proyectoActual] = proyecto;

    const onClickEliminar = ( ) =>{
        eliminarProyecto(proyectoActual._id)
    }
    return ( 
        <>
            <h2>Proyecto: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {
                    (tareasProyecto.length === 0) ? <li className="tarea"><p>No Hay Tareas</p></li>:
                    <TransitionGroup>
                        {
                            tareasProyecto.map(tarea=>(
                                <CSSTransition key={tarea.nombre + "P"} timeout={500} classNames="tarea">
                                    <Tarea tarea={tarea}/>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }
            </ul>
            <button 
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >
                Eliminar Proyecto &times;
            </button>
        </>
     );
}
 
export default ListaTareas;