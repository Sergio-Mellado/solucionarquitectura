import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './login.css';

/**
 * Componente de inicio de sesión que verifica las credenciales de usuario y contraseña.
 */
const Login = () => {
  const navigate = useNavigate();
  const [Usuario, setUsuario] = useState('');
  const [Contraseña, setContraseña] = useState('');

  // Manejador de cambio para el campo de nombre de usuario
  const handleUsernameChange = (e) => {
    setUsuario(e.target.value);
  };

  // Manejador de cambio para el campo de contraseña
  const handlePasswordChange = (e) => {
    setContraseña(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Usuario === 'panchouwu' && Contraseña === 'uwu123') {
      alert('Inicio de sesión exitoso');
      navigate('/perfilusuario'); // Redirige al usuario a la página de perfil de usuario 
    } else {
      alert('Datos incorrectos. Inténtalo de nuevo.');
      // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario si las credenciales son incorrectas
    }
  };

  // Interfaz del componente de inicio de sesión
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Bienvenido</h2>
        <div>
          <label>Usuario</label>
          <input type="text" value={Usuario} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" value={Contraseña} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
