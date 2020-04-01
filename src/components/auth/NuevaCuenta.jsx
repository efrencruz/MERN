import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    const [usuario, guardarUsuario] = useState({ nombre: '', email: '', password: '', confirmar: '' });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu nombre"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>
                <Link className="enlace-cuenta" to={'/'}>
                    Volver a inicio de sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;
