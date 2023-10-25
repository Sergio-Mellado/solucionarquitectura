import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Productos from './productos';

const App = () => {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/productos" component={Productos} />
    </Router>
  );
};

export default App;
