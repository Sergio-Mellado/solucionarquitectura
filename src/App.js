import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login';
import Productos from './productos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/productos",
    element: <Productos />
  }
])

const App = () => {
  return (
  <RouterProvider router={router} />
  );
};

export default App;
