import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareasProyecto = [
        { nombre: 'Elegir algo', estado: true },
        { nombre: 'Elegir otro', estado: false },
        { nombre: 'Elegir epa', estado: false },
        { nombre: 'Elegir dos', estado: true }
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tareasProyecto.map(tarea => <Tarea key={tarea.nombre} tarea={tarea}></Tarea>)
                )}
            </ul>
            <button type="button" className="btn btn-eliminar">
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
};

export default ListadoTareas;
