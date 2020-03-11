import React from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Barra from '../../components/layout/Barra';
import FormTarea from '../../components/tareas/FormTarea';
import ListadoTareas from '../../components/tareas/ListadoTareas';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar></Sidebar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <FormTarea></FormTarea>
                    <div className="contenedor-tareas">
                        <ListadoTareas></ListadoTareas>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Proyectos;
