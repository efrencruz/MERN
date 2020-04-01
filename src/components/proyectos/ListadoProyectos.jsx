import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../contexts/Proyectos/proyectoContext';

const ListadoProyectos = () => {
    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // Revisar si hay proyectos
    if (proyectos.length === 0) return null;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
                        <Proyecto proyecto={proyecto}></Proyecto>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ListadoProyectos;
