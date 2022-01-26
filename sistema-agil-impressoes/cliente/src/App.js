import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import TelaInicial from './paginas/TelaInicial';
import TelaDetalhesProduto from './paginas/TelaDetalhesProduto';

import './utils/style.css';
import TelaCarrinhoCompras from './paginas/TelaCarrinhoCompras';
import { useSelector } from 'react-redux';

function App() {
  const carrinho = useSelector((state) => state.carrinhoCompras);
  const { itensCarrinho } = carrinho;

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand" href="index.html">
              Gráfica Rápida - Agil Impressões
            </Link>
          </div>
          <div>
            <Link to="/carrinho/0">
              Carrinho
              {itensCarrinho.length > 0 && (
                <span className="bagde">{itensCarrinho.length}</span>
              )}
            </Link>
            <Link to="signin.html">Entrar</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/carrinho/:id"
              element={<TelaCarrinhoCompras />}
            ></Route>
            <Route path="/" element={<TelaInicial />} exact></Route>
            <Route
              path="/produtos/:id"
              element={<TelaDetalhesProduto />}
              exact
            ></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>/
      </div>
    </Router>
  );
}

export default App;
