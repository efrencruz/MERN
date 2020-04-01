import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../contexts/Proyectos/proyectoContext';
import tareaContext from '../../contexts/Tareas/tareaContext';

const FormTarea = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {
        errortarea,
        tareaseleccionada,
        agregarTarea,
        validarTarea,
        obtenerTareas,
        actualizarTarea,
        limpiarTarea
    } = tareasContext;

    useEffect(() => {
        if (tareaseleccionada) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            });
        }
    }, [tareaseleccionada]);

    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    if (!proyecto) return null;

    const [proyectoActual] = proyecto;

    // leer los valores del form
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        // validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Es edicion o es nueva
        if (tareaseleccionada) {
            actualizarTarea(tarea);
            limpiarTarea();
        } else {
            // agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre: ''
        });
    };

    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
                        type="text"
                        value={nombre}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block btn-submit"
                        value={tareaseleccionada ? 'Editar tarea' : 'Agregar tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">La tarea es obligatoria</p> : null}
        </div>
    );
};

export default FormTarea;
