import React from 'react';
import Tarea from './Tarea';
const ListaTareas = () => {

    const tareasProyecto = [
        {nombre: 'Hacer Layout', estado:true},
        {nombre: 'Hacer Responsive', estado:false},
        {nombre: 'Agregar Interactividad', estado:false},
        {nombre: 'Hacer Deployment', estado:true},
    ]
    return ( 
        <>
            <h2>Proyecto: Galeria CSS</h2>
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
            >
                Eliminar Proyecto &times;
            </button>
        </>
     );
}
 
export default ListaTareas;