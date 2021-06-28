import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChange = (e) =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e =>{
        e.preventDefault();
        
    }

    return ( 
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ ()=> mostrarFormulario() }
            >
                Nuevo Proyecto
            </button>
            {
                (formulario) ?
                (
                    <form onSubmit={onSubmitProyecto}>
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                        <input type="submit" className="btn btn-block btn-primario" value="Agregar Proyecto" />
                    </form>
                ): null
            }
        </>
     );
}
 
export default NuevoProyecto;