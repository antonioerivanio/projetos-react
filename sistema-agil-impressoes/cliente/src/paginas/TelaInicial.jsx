import React from 'react';

import Produtos from '../componentes/Produtos';
import dadosProdutos from '../utils/dadosProdutos';

export default function TelaInicial() {
  return (
    <div className="row center">
      {dadosProdutos.produtos.map((produto) => (
        <Produtos key={produto._id} produto={produto}></Produtos>
      ))}
    </div>
  );
}
