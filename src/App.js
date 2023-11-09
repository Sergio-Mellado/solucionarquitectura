import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './login';
import Productos from './productos';
import PerfilUsuario from './Perfil';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/productos",
    element: <Productos/>
  },
  {
    path: "/perfilusuario",
    element: <PerfilUsuario/>
  }
]);

const App = () => {
  return (
   <>
   <RouterProvider router={routes} />
   </>
  
  )
}

 

export default App ;