import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    const proyectos = [{ nombre: 'ejemplo' }, { nombre: 'otro' }];

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto key={proyecto.nombre} proyecto={proyecto}></Proyecto>
            ))}
        </ul>
    );
};

export default ListadoProyectos;
