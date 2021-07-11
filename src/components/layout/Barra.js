import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext'

const Barra = () => {
    //extraer info de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario , usuarioAutenticado, cerrarSesion } = authContext;
 
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    const onClickBtn = () =>{
        cerrarSesion();
        // document.location.reload();
    }
    return (
        <header className="app-header">
            {
                usuario ?
                <p className="nombre-usuario mt-1">
                    Bienvenido <span className="user">{usuario.nombre}</span>
                </p>
                :
                null
            }
            <nav className="nav-principal">
                <button type="submit" className="btn-f btn-blank" onClick={onClickBtn} >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
     );
}
 
export default Barra;