import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Perfil.css';

/**
 * Componente de perfil de usuario que permite al usuario ver y editar su información personal.
 */
const PerfilUsuario = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: 'pancho react',
    email: 'uwupancho@example.com',
    bio: 'Mi nombre es francisco arias y soy productor de manzanas rojas, las cuales son las más jugosas.',
    //profilePicture: '' // URL de la foto de perfil del usuario
  });
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleBioChange = (e) => {
    setUser({ ...user, bio: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    setUser({ ...user, profilePicture: URL.createObjectURL(e.target.files[0]) });
  };

  const handleLogout = () => {
    history.push('/'); // Redirige al usuario de vuelta a la página de inicio de sesión
  };

  return (
    <div>
      <h2>Mi Perfil</h2>
      <div className="menu-torta">
        <ul>
          <li>Productos</li>
          <li onClick={handleLogout}>Salir</li>
        </ul>
      </div>
      <div>
        <label>
          Foto de perfil:
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </label>
        {user.profilePicture && <img src={user.profilePicture} alt="Foto de perfil" style={{ width: '100px', height: '100px' }} />}
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={user.name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={user.email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Bio:
          <textarea value={user.bio} onChange={handleBioChange} />
        </label>
      </div>
      <div>
        <button onClick={() => console.log(user)}>Save</button>
      </div>
    </div>
  );
};
export default PerfilUsuario ;