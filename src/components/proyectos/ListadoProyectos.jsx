import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../contexts/Proyectos/proyectoContext';

const ListadoProyectos = () => {
    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si hay proyectos
    if (proyectos.length === 0) return null;

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto key={proyecto.id} proyecto={proyecto}></Proyecto>
            ))}
        </ul>
    );
};

export default ListadoProyectos;
