import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListaTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    if(!proyecto) return <h1>Selecciona un proyecto</h1>

    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: 'Hacer Layout', estado:true},
        {nombre: 'Hacer Responsive', estado:false},
        {nombre: 'Agregar Interactividad', estado:false},
        {nombre: 'Hacer Deployment', estado:true},
    ]

    const onClickEliminar = ( ) =>{
        eliminarProyecto(proyectoActual.id)
    }
    return ( 
        <>
            <h2>Proyecto: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {
                    (tareasProyecto.length === 0) ? <li className="tarea"><p>No Hay Tareas</p></li>:
                    tareasProyecto.map(tarea=>(
                        <Tarea key={tarea.nombre} tarea={tarea}/>
                    ))
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