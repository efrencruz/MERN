import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir algo', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir otro', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir epa', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir dos', estado: true, proyectoId: 2 },
            { id: 5, nombre: 'Elegir asdf', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir 123', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir qwerty', estado: false, proyectoId: 3 },
            { id: 8, nombre: 'Elegir popo', estado: true, proyectoId: 1 }
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    };

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    // Agregar tarea al proyecto
    const agregarTarea = tarea => {
        tarea.id = uuidv4();

        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    };

    // Valida y muestra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    };

    // Eliminar tarea
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    };

    // Cambiar estado de tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    };

    // Extrae la tarea para la edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    };

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    };

    // Limpiar tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        });
    };

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
};

export default TareaState;
