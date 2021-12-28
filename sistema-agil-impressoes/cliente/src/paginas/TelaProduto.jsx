import React from 'react';
import { useParams } from 'react-router-dom';
import Avaliacao from '../componentes/Avaliacao';
import dadosProdutos from '../../../servidor/dadosProdutos';

export default function TelaProduto() {
  let { id } = useParams();
  const produto = dadosProdutos.produtos.find((x) => x._id === id);
  if (!produto) return <div>Produto Não Encontrado!</div>;

  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img src={produto.image} alt={produto.image} className="large" />
        </div>
        <div className="col-1">
          <ul>
            <li>{produto.nome}</li>
            <li>
              <Avaliacao
                avaliacao={produto.avaliacao}
                numVisualizacoes={produto.numVisualizacoes}
              ></Avaliacao>
            </li>
            <li>Preço: ${produto.preco}</li>
            <li>Descrição: {produto.descricao}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Preço</div>
                  <div className="price">R${produto.preco}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div className="price">
                    {produto.quantidadeEmEstoque > 0 ? (
                      <span className="sucesso">'Em estoque' </span>
                    ) : (
                      <span className="erro">'Produto indisponível'</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Adicionar ao carrinho</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
