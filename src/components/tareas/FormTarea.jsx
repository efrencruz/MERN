import React from 'react';

const FormTarea = () => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input className="input-text" placeholder="Nombre tarea" name="tarea" type="text"></input>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-block btn-submit" value="Agregar tarea" />
                </div>
            </form>
        </div>
    );
};

export default FormTarea;
