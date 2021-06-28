import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e) =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Cuenta</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Repetir Contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Contraseña"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    <b>Ya tienes cuenta?</b> Inicia Sesion!
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;