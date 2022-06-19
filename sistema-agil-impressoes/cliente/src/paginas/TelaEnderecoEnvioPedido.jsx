import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { salvar } from '../actions/enderecosAction';
import PassoAPassoCompra from '../componentes/PassaAPassoCompra';
//import api from '../utils/services/api';
import {getEnderecoPorCep} from '../utils/webServiceCorreios.js';



const TelaEnderecoEnvioPedido = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const entrarConta = useSelector((state) => state.entrarConta);
  const { infoUsuario } = entrarConta;
  const enderecoEnvioSalvo = useSelector((state) => state.endereco);
  const [endereco, setEndereco] = useState();
  const [numero, setNumero] = useState(0);
  const [cep, setCep] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [nomeCompleto, setNomeCompleto] = useState();
  const [estado, setEstado] = useState();

  if(!enderecoEnvioSalvo){
    setEndereco(enderecoEnvioSalvo.endereco);
    setNumero(enderecoEnvioSalvo.numero);
    setCep(enderecoEnvioSalvo.cep);
    setBairro(enderecoEnvioSalvo.endereco);
    setCidade(enderecoEnvioSalvo.cidade);
    setNomeCompleto(enderecoEnvioSalvo.nomeCompleto);
    setEstado(enderecoEnvioSalvo.estado)
  }
  
  useEffect(()=>{
    getEnderecoPorCep(cep).then((response)=>{
      setCep(response.data.cep);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);  
      setEndereco(response.data.logradouro);
      setEstado(response.data.uf)
    })
  
  }, [cep])
    
  if (!infoUsuario) {
    navigate('/entrar');
  }
  const submitHandler = (e) => {
    console.log(nomeCompleto, endereco, numero, cep, bairro, cidade)
    e.preventDefault();
    dispatch(salvar({nomeCompleto, endereco, numero, cep, bairro, cidade}));

    navigate('/pagamento');
  };

  return (
    <div>
      <PassoAPassoCompra passo1 passo2></PassoAPassoCompra>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="nome">Nome Completo {nomeCompleto}</label>
          <input
            type="text"
            id="nome"
            placeholder="nome completo"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="cep">Cep</label>
          <input
            type="text"
            id="cep"
            required
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            placeholder="Rua I"
            required
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="numero">Nº</label>
          <input
            type="number"
            id="numero"
            placeholder="01"
            required
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          ></input>
        </div>
       
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="Bairro"
            required
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            required
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            required
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          ></input>
        </div>
        <div>
          <label>
            <button className="primary" type="submit">
              Continua
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default TelaEnderecoEnvioPedido;
