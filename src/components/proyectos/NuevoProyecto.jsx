import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../contexts/Proyectos/proyectoContext';

const NuevoProyecto = () => {
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({ nombre: '' });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({ ...proyecto, [e.target.name]: e.target.value });
    };

    const onSubmitProyecto = e => {
        e.preventDefault();

        if (nombre === '') {
            mostrarError();
            return;
        }

        agregarProyecto(proyecto);

        guardarProyecto({ nombre: '' });
    };

    const onClickFormulario = () => {
        mostrarFormulario();
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario" onClick={onClickFormulario}>
                Nuevo proyecto
            </button>
            {formulario ? (
                <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre proyecto"
                        name="nombre"
                        onChange={onChangeProyecto}
                        value={nombre}
                    />
                    <input type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />
                </form>
            ) : null}
            {errorFormulario ? <p className="mensaje error">El nombre del proyetco es obligatorio</p> : null}
        </Fragment>
    );
};

export default NuevoProyecto;
