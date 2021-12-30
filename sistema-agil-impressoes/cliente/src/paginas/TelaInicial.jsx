import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listaProdutos } from '../actions/produtosActions';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MensageBox from '../componentes/mensages/MensageBox';
import Produtos from '../componentes/Produtos';

export default function TelaInicial() {
  const dispatch = useDispatch();
  const produtoList = useSelector((state) => state.produtoList);
  const { loading, error, produtos } = produtoList;
  useEffect(() => {
    dispatch(listaProdutos());
  }, []);

  return (
    <div className="row center">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MensageBox variant="danger">{error}</MensageBox>
      ) : (
        <div className="row center">
          {produtos.map((produto) => (
            <Produtos key={produto._id} produto={produto}></Produtos>
          ))}
        </div>
      )}
    </div>
  );
}
