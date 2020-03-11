import React, { useState, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [usuario, guardarUsuario] = useState({ email: '', password: '' });

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form onSubmit={onSubmit}>
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
                    </div>
                </form>
                <Link className="enlace-cuenta" to={'nueva-cuenta'}>
                    Obtener cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;
