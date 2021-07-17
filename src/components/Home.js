import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import clienteAxios from '../config/axios';
const Home = () => {

    //Esta peticion es inutil pero la pongo para que al cargar la pagina 
    //se active el servidor en heroku porque se apaga solo :v

    useEffect(()=>{
        const activarHeroku = async () =>{
            await clienteAxios.get('/api/auth');
        }
        activarHeroku();
    },[]);

    return ( 
        <div className="home">
            <div className="elem">
                <h1>FS<span>Projects</span></h1>
                <h1>Administra Tus Proyectos De Una Manera Inteligente</h1>
                <div className="botones-home">
                    <Link to={"/login"} className="btn-home">Inicia Sesión</Link>
                    <Link to={"/nueva-cuenta"} className="btn-home">Crea Una Cuenta</Link>
                </div>
            </div>
            <div className="elem">
                <img src="home.png" alt="Proyecto" />
            </div>
        </div>
     );
}
 
export default Home;