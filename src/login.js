
import './login.css';

// Componente de inicio de sesión que permite a los usuarios ingresar sus credenciales
const Login = () => {
  // Uso del hook useHistory para navegar a diferentes rutas
  const history = useHistory();
  
  // Estados para almacenar los valores de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Funciones para manejar cambios en el campo de usuario y contraseña
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Usuario: ${username} Contraseña: ${password}`);
    history.push('/productos'); // Redirige a la página de productos después del inicio de sesión exitoso
  };

  // Estructura del formulario de inicio de sesión con campos de usuario y contraseña
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Usuario</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
 };
export default Login;