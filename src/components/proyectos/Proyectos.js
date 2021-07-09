import React, {useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListaTareas from '../tareas/ListaTareas';
import AuthContext from '../../context/autenticacion/authContext'
const Proyectos = () => {

    //extraer info de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])
    
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <div className="seccion-principal">
                    <Barra/>
                </div>
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListaTareas/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;