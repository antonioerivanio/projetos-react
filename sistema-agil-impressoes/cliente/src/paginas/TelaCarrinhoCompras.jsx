import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { adicionarItemAoCarrinho } from '../actions/carrinhoCompraAction';

export default function TelaCarrinhoCompras(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const produtoId = id;

  useEffect(() => {
    dispatch(adicionarItemAoCarrinho(produtoId, qty));
  }, [dispatch, produtoId, qty]);

  return (
    <div>
      <h1>Itens Carrinho </h1>
      <p>
        id: {produtoId} , quantidade: {qty}
      </p>
    </div>
  );
}
