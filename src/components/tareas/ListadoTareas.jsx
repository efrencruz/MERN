import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../contexts/Proyectos/proyectoContext';
import tareaContext from '../../contexts/Tareas/tareaContext';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    if (!proyecto) {
        return <h2>Selecciona un proyecto</h2>;
    }

    const [proyectoActual] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    };

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                                <Tarea tarea={tarea}></Tarea>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ul>
            <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
};

export default ListadoTareas;
