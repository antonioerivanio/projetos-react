import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { salvar } from '../actions/enderecosAction';
import { entrar } from '../actions/usuariosAction';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MensageBox from '../componentes/mensages/MensageBox';
import PassoAPassoCompra from '../componentes/PassaAPassoCompra';

const TelaEnderecoEnvioPedido = (props) => {
  const dispatch = useDispatch();
  const enderecoEnvioSalvo = useSelector((state) => state.enderecoEnvioSalvo);
  const { infoUsuario, loading, error } = enderecoEnvioSalvo;
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(salvar(nomeCompleto, endereco, numero, cep, bairro, cidade));
  };

  return (
    <div>
      <PassoAPassoCompra passo1 passo2></PassoAPassoCompra>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Cadastrar Conta</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MensageBox></MensageBox>}
        <div>
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            placeholder="nome completo"
            required
            onChange={(e) => setNomeCompleto(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            placeholder="Rua I"
            required
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
            onChange={(e) => setNumero(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="cep">Cep</label>
          <input
            type="text"
            id="cep"
            required
            onChange={(e) => setCep(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="Bairro"
            required
            onChange={(e) => setBairro(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            required
            onChange={(e) => setCidade(e.target.value)}
          ></input>
        </div>
        <div>
          <label>
            <button className="primary" type="submit" onClick={submitHandler}>
              Salvar
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default TelaEnderecoEnvioPedido;
