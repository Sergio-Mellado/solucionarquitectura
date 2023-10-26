import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import './login.css';


const Login = () => {
  const navigate = useNavigate();
  const [Usuario, setUsuario] = useState('');
  const [Contraseña, setContraseña] = useState('');

  const handleUsernameChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Usuario: ${Usuario} Contraseña: ${Contraseña}`);
    
    navigate('/productos')
    
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
