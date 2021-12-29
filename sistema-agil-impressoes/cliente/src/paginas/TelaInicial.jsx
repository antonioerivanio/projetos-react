import React, { useEffect, useState } from 'react';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MensageBox from '../componentes/mensages/MensageBox';

import Produtos from '../componentes/Produtos';
import api from '../utils/services/api';

export default function TelaInicial() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const buscarDadosProdutos = async () => {
      try {
        setloading(true);

        const { data } = await api.get('/api/produtos');
        setloading(false);
        setProdutos(data);

        buscarDadosProdutos();
      } catch (err) {
        setError(err.message);
        setloading(false);
        console.error('ops! ocorreu um erro' + err);
      }
      setloading(false);
    };
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
