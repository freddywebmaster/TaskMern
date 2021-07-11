import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListaProyectos from '../proyectos/ListaProyectos';


const Sidebar = () => {
    return ( 
        <aside>
            <h1>FS<span>Projects</span></h1>
            <NuevoProyecto/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListaProyectos/>
            </div>
        </aside>
     );
}
 
export default Sidebar;