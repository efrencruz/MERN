import React, { useContext } from 'react';
import proyectoContext from '../../contexts/Proyectos/proyectoContext';
import tareaContext from '../../contexts/Tareas/tareaContext';

const Tarea = ({ tarea }) => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    const { nombre, estado } = tarea;
    const [proyectoActual] = proyecto;

    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    };

    // Funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }

        cambiarEstadoTarea(tarea);
    };

    // Agrega la tarea actual para editar
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    };

    return (
        <li className="tarea sombra">
            <p>{nombre}</p>
            <div className="estado">
                {estado ? (
                    <button onClick={() => cambiarEstado(tarea)} type="button" className="completo">
                        Completo
                    </button>
                ) : (
                    <button onClick={() => cambiarEstado(tarea)} type="button" className="incompleto">
                        Incompleto
                    </button>
                )}
            </div>
            <div className="aciones">
                <button onClick={() => seleccionarTarea(tarea)} type="button" className="btn btn-primario">
                    Editar
                </button>
                <button onClick={() => tareaEliminar(tarea.id)} type="button" className="btn btn-secundario">
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea;
