import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  adicionarItemAoCarrinho,
  removerItemCarrinho,
} from '../actions/carrinhoCompraAction';
import MensageBox from '../componentes/mensages/MensageBox';

export default function TelaCarrinhoCompras(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const produtoId = id;
  const carrinho = useSelector((state) => state.carrinhoCompras);
  const { itensCarrinho } = carrinho;

  const entrarConta = useSelector((state) => state.entrarConta);
  const { infoUsuario } = entrarConta;

  const navigate = useNavigate();
  useEffect(() => {
    if (produtoId !== 'undefined')
      dispatch(adicionarItemAoCarrinho(produtoId, qty));
  }, [dispatch, produtoId, qty]);

  const removerItemCarrinhoHandler = (id) => {
    dispatch(removerItemCarrinho(id));
  };

  const finalizarCompraHandler = () => {
    console.log('finalizar');
    navigate('/entrar?redirect=/shipping');
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Carrinho de Compras</h1>
        {itensCarrinho.length === 0 ? (
          <MensageBox>
            Carrinho está vazio.<Link to="/">Continuar Comprando</Link>
          </MensageBox>
        ) : (
          <ul>
            {itensCarrinho.map((item) => (
              <li key={item.produto}>
                <div className="row">
                  <div>
                    <img src={item.imagem} alt={item.nome} className="small" />
                  </div>
                  <div className="min-30">
                    <Link to={`/api/produtos/${item.produto}`}>
                      {item.nome}
                    </Link>
                  </div>
                  <div>
                    <select
                      value={item.quantidade}
                      onChange={(e) =>
                        dispatch(
                          adicionarItemAoCarrinho(
                            item.produto,
                            Number(e.target.value)
                          )
                        )
                      }
                    >
                      {[...Array(item.quantidadeEmEstoque).keys()].map(
                        (qtd) => (
                          <option key={qtd + 1} value={qtd + 1}>
                            {qtd + 1}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>${item.preco}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removerItemCarrinhoHandler(item.produto)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                SubTotal ({itensCarrinho.reduce((a, c) => a + c.quantidade, 0)}
                {''} items) : $
                {itensCarrinho.reduce((a, c) => a + c.preco * c.quantidade, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={finalizarCompraHandler}
                className="primary block"
                disabled={itensCarrinho.length === 0}
              >
                Finalizar Compra
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
