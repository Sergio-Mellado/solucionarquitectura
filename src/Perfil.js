import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

const PerfilUsuario = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'pancho',
    email: 'uwupancho@duocuc.cl.com',
    informacion: 'Mi nombre es Francisco Arias y soy productor de manzanas rojas, las cuales son las más jugosas.',
    profilePicture: '/Logo/Feria virtual.png', // Ruta ajustada para la imagen
  });

  const [mostrarFormularioSolicitud, setMostrarFormularioSolicitud] = useState(false);

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  
  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  
  const handleInformacionChange = (e) => {
    setUser({ ...user, informacion: e.target.value });
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSolicitudes = () => {
    setMostrarFormularioSolicitud(!mostrarFormularioSolicitud);
  };

  const handleProductos = () => {
    navigate('/productos');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado:', user);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-info">
        {user.profilePicture && <img src={user.profilePicture} alt="Foto de perfil" />}
        <div className="user-container">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.informacion}</p>
        </div>
      </div>
      <div className="perfil-actions">
        <button onClick={handleSolicitudes}>Solicitudes</button>
        <button onClick={handleProductos}>Productos</button>
        <button onClick={handleLogout}>Salir</button>
      </div>

      {mostrarFormularioSolicitud && (
        <div className="formulario-solicitud">
          <form onSubmit={handleFormSubmit}>
            <h3>Realizar Solicitud</h3>
            <div>
              <label>N° Solicitud</label>
              <input type="text" placeholder="Autoincremental" disabled />
            </div>
            <div>
              <label>Seleccionar tipo</label>
              <select>
                <option value="frutas">Frutas</option>
                <option value="verduras">Verduras</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>Transportista</label>
              <select>
                <option value="donPepe">Transporte Don Pepe</option>
                <option value="limitada">Transporte Limitada</option>
                <option value="valdes">Transportes Valdes</option>
                <option value="sayago">Transportes Sayago</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>Cantidad (Kg)</label>
              <input type="number" />
            </div>
            <br></br>
            <div className="botones">
              <button type="button" name="botton-solicitar">Solicitar</button>
              <button type="button" name="botton-Verestado">Ver Estado</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;
