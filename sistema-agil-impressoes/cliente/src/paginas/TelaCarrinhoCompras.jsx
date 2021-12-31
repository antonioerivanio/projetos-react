import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function TelaCarrinhoCompras(props) {
  const { id } = useParams();

  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const produtoId = id;

  return (
    <div>
      <h1>Itens Carrinho </h1>
      <p>
        id: {produtoId} , quantidade: {qty}
      </p>
    </div>
  );
}
