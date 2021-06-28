import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto, validarError , errorform} = proyectosContext;

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
        if (nombre===""){
            validarError();
            return;
        }
        agregarProyecto(proyecto);

        guardarProyecto({
            nombre: ''
        })
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
                ): null }
                {
                    errorform ? <p className="mensaje error">El nombre es obligatorio</p>:null
                }
        </>
     );
}
 
export default NuevoProyecto;