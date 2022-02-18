import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { salvar } from '../actions/enderecosAction';
import { entrar } from '../actions/usuariosAction';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MensageBox from '../componentes/mensages/MensageBox';
import PassoAPassoCompra from '../componentes/PassaAPassoCompra';

const TelaEnderecoEnvioPedido = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const entrarConta = useSelector((state) => state.entrarConta);
  const { infoUsuario } = entrarConta;
  const enderecoEnvioSalvo = useSelector((state) => state.endereco);

  const [nomeCompleto, setNomeCompleto] = useState(
    enderecoEnvioSalvo.nomeCompleto
  );
  const [endereco, setEndereco] = useState(enderecoEnvioSalvo.endereco);
  const [numero, setNumero] = useState(enderecoEnvioSalvo.numero);
  const [cep, setCep] = useState(enderecoEnvioSalvo.cep);
  const [bairro, setBairro] = useState(enderecoEnvioSalvo.endereco);
  const [cidade, setCidade] = useState(enderecoEnvioSalvo.cidade);
  console.log(enderecoEnvioSalvo);

  if (!infoUsuario) {
    navigate('/entrar');
  }
  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(salvar({ nomeCompleto, endereco, numero, cep, bairro, cidade }));

    navigate('/pagamento');
  };

  return (
    <div>
      <PassoAPassoCompra passo1 passo2></PassoAPassoCompra>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="nome">Nome Completo 2 {nomeCompleto}</label>
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
