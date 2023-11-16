import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

const PerfilUsuario = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'pancho',
    email: 'uwupancho@duocuc.cl.com',
    informacion: 'Mi nombre es Francisco Arias y soy productor de manzanas rojas, las cuales son las más jugosas.',
    profilePicture: '../src/Logo/Feria virtual.png', 
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
  

  const handleProfilePictureChange = (e) => {
    setUser({ ...user, profilePicture: URL.createObjectURL(e.target.files[0]) });
  };

  const handleLogout = () => {
    navigate('/login'); // Redirige al usuario de vuelta a la página de inicio de sesión
  };

  const handleSolicitudes = () => {
    // Mostrar u ocultar el formulario al presionar el botón "Solicitudes"
    setMostrarFormularioSolicitud(!mostrarFormularioSolicitud);
  };

  const handleProductos = () => {
    navigate('/productos'); // Redirige al usuario a la página de productos
  };

  return (
    <div className="perfil-container">
      <div className="perfil-info">
        <label>
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </label>
        {user.profilePicture && <img src={user.profilePicture} alt="Editar Foto" />}
        <div>
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
    <form>
      <h3>Realizar Solicitud</h3>
      <p></p>
      <div>
        <label>N° Solicitud</label>
        {/* Aquí puedes manejar la lógica para generar el número de solicitud */}
        <input type="text" placeholder="Autoincremental" disabled />
      </div>
      <div>
      <p></p>
        <label>Tipo de Producto </label>
        <select>
          <p></p>
          <option value="frutas">Frutas</option>
          <p></p>
          <option value="verduras">Verduras</option>
        </select>
        <p></p>
        <p></p>
      </div>
      <div>
        <label>Transportista </label>
        <select>
          <option value="donPepe">Transporte Don Pepe</option>
          <p></p>
          <option value="limitada">Transporte Limitada</option>
          <p></p>
          <option value="valdes">Transportes Valdes</option>
          
          <option value="sayago">Transportes Sayago</option>
        </select>
          <div>
          <label>Cantidad </label>
          </div>
      </div>
      <div className="botones">
      <p></p>
      <p></p>
        <button type="submit">Solicitar</button>
        <p></p>
        <button type="button">Ver Estado</button>
      </div>
    </form>
  </div>
)}
    </div>
  );
};

export default PerfilUsuario;
