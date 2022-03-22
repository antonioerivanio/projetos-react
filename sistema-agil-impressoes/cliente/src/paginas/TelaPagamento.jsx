import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { finalizarPagamento } from '../actions/carrinhoCompraAction';

import PassoAPassoCompra from '../componentes/PassaAPassoCompra';

const TelaPagamento = (props) => {
  const navigate = useNavigate();
  const [metodoTipoPagamento, setMetodoTipoPagamento] = useState('Paypal');
  const endereco = useSelector(state => state.endereco)
  const dispatch = useDispatch();


  if(!endereco.enderecoCompra){
    navigate('/endereco')
  }
  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(finalizarPagamento(metodoTipoPagamento));
    navigate("/detalhesPedido")
  
  };

  return (
    <div>
      <PassoAPassoCompra passo1 passo2></PassoAPassoCompra>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Pagamento</h1>
        </div>
        <div>
          <div>
            <input type="radio" id="paypal" value="Paypal"
             name="metodoPagamento"
             required checked onChange={(e) => setMetodoTipoPagamento(e.target.value)}
          ></input> 
          <label htmlFor='paypal'> Paypa </label></div>
           <div>
            <input type="radio" id="dinheiro" value="Dinheiro"
             name="metodoPagamento"
             required  onChange={(e) => setMetodoTipoPagamento(e.target.value)}
          ></input> <label htmlFor='dinheiro'> Dinheiro </label></div>
         <div>
          <label>
            <button className="primary" type="submit" onClick={submitHandler}>
              Pagar
            </button>
          </label>
        </div>
        </div>
      </form>
    </div>
  );
};

export default TelaPagamento;
