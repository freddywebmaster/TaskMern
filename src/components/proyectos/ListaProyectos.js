import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AlertaContext from  '../../context/alertas/alertaContext';

const ListaProyectos = () => {

    const proyectosContext =  useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    useEffect(()=> {
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerProyectos();
        //eslint-disable-next-line
    }, [mensaje])

    if(proyectos.length === 0) return <p>No hay proyectos agrega uno</p>;


    return ( 
        <ul className="listado-proyectos">
            {
                alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null
            }
            <TransitionGroup>
                {
                    proyectos.map(proyecto =>(
                        <CSSTransition key={proyecto._id} timeout={500} classNames="proyecto" >
                            <Proyecto proyecto={proyecto}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
     );
}
 
export default ListaProyectos;