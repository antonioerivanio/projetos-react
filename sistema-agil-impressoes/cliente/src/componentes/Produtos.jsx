import React from 'react';
import { Link } from 'react-router-dom';
import Avaliacao from './Avaliacao';

const Produtos = ({ produto }) => {
  return (
    <div className="card">
      <Link to={`/produtos/${produto._id}`}>
        {/* image size: 680px by 830px */}
        <img className="medium" src={produto.image} alt={produto.nome} />
      </Link>
      <div className="card-body">
        <Link to={`/produtos/${produto._id}`}>
          <h2>{produto.nome}</h2>
        </Link>
        <Avaliacao produto={produto} />
        <div className="preco">R$ {produto.preco}</div>
      </div>
    </div>
  );
};

export default Produtos;
