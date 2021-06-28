import React from 'react';

const FormTarea = () => {
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre" 
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value="Guardar Tarea"
                        className="btn btn-primario btn-block"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;