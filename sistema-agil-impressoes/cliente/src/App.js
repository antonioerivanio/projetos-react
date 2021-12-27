import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TelaInicial from './paginas/TelaInicial';
import TelaProduto from './paginas/TelaProduto';

import './utils/style.css';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              amazona
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TelaInicial />} exact></Route>
            <Route path="/produto/:id" element={<TelaProduto />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>/
      </div>
    </Router>
  );
}

export default App;
