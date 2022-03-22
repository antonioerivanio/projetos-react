import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import TelaInicial from './paginas/TelaInicial';
import TelaDetalhesProduto from './paginas/TelaDetalhesProduto';

import './utils/style.css';
import TelaCarrinhoCompras from './paginas/TelaCarrinhoCompras';
import { useDispatch, useSelector } from 'react-redux';
import { TelaEntrarConta } from './paginas/TelaEntrarConta';
import { sair } from './actions/usuariosAction';
import { TelaCadastro } from './paginas/TelaCadastro';
import TelaEnderecoEnvioPedido from './paginas/TelaEnderecoEnvioPedido';
import TelaPagamento from './paginas/TelaPagamento';
import TelaDetalheCompra from './paginas/TelaDetalheCompra';

function App() {
  const carrinho = useSelector((state) => state.carrinhoCompras);
  const { itensCarrinho } = carrinho;
  const entrarConta = useSelector((state) => state.entrarConta);
  const { infoUsuario } = entrarConta;
  const dispatch = useDispatch();

  const saiContaHandler = () => {
    dispatch(sair());
  };

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
            <Link to="/carrinho">
              {' '}
              Carrinho
              {itensCarrinho.length > 0 && (
                <span className="bagde">{itensCarrinho.length}</span>
              )}
            </Link>
            {infoUsuario ? (
              <div className="dropdown">
                <Link to="#">
                  {infoUsuario.nome}
                  <i className="fa fa-caret-down"></i>
                  {''}
                </Link>
                <ul className="dropdown-content">
                  <Link to="#sair" onClick={saiContaHandler}>
                    Sair
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/entrar">Entrar</Link>
            )}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/carrinho" element={<TelaCarrinhoCompras />}></Route>
            <Route
              path="/carrinho/:id"
              element={<TelaCarrinhoCompras />}
            ></Route>
            <Route path="/" element={<TelaInicial />} exact></Route>
            <Route
              path="/produtos/:id"
              element={<TelaDetalhesProduto />}
              
            ></Route>
            <Route path="/entrar" element={<TelaEntrarConta />} ></Route>
            <Route path="/cadastrar" element={<TelaCadastro />} ></Route>
            <Route
              path="/endereco"
              element={<TelaEnderecoEnvioPedido />}
              
            ></Route>
            <Route path="/pagamento" element={<TelaPagamento />} ></Route>
            <Route path="/detalhesPedido" element={<TelaDetalheCompra/>} ></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>/
      </div>
    </Router>
  );
}

export default App;
