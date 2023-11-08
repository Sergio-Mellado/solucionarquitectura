import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, createRoutes, RouterProvider } from 'react-router-dom';
import Login from './login';
import Productos from './productos';
import PerfilUsuario from './Perfil';

const routes = createRoutes([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/productos",
    element: <Productos />
  },
  {
    path: "/perfilusuario",
    element: <PerfilUsuario />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider routes={routes} />
    </HashRouter>
  </React.StrictMode>
);
export default './App' ;