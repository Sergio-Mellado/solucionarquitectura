import React, { useState } from 'react';
import './productos.css';

/**
 * Componente de productos que muestra una lista de productos y permite buscar y ver detalles.
 */
const Productos = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Manzanas', description: 'Manzanas frescas de la granja loca, las mejores manzanas del lugar, dulces y maduras, rojas como el amor que tenemos hacia ti.', imageUrl: 'https://cdn.forbes.com.mx/2015/10/juliana-640x400.jpg' },
    // Agrega más productos si es necesario
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleMoreDetails = (product) => {
    console.log("Detalles del producto:", product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>¡Descubre los mejores productos!</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Ingresar nombre"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button onClick={() => handleMoreDetails(product)}>Ver más</button>
            </div>
          </li>
        ))}
      </ul>
      {loggedIn && <button onClick={handleLogout}>Salir</button>}
    </div>
  );
};

export default Productos;
