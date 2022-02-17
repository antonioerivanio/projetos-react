import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cadastrar } from '../actions/usuariosAction';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MensageBox from '../componentes/mensages/MensageBox';

export function TelaCadastro(props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isAdministrador, setIsAdministrador] = useState(false);

  let navigate = useNavigate();
  const entrarConta = useSelector((state) => state.entrarConta);
  const { infoUsuario, loading, error } = entrarConta;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('Senha e Confirmar Senha devem ser iguais!');
    } else {
      dispatch(cadastrar(nome, email, senha));
    }
  };

  useEffect(() => {
    if (infoUsuario) {
      navigate('/', { replace: true });
    }
  });

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Cadastrar Conta</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MensageBox></MensageBox>}
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="nome completo"
            required
            onChange={(e) => setNome(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="e@2tY"
            required
            onChange={(e) => setSenha(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            required
            onChange={(e) => setConfirmarSenha(e.target.value)}
          ></input>
        </div>
        <div>
          <label>
            <button className="primary" type="submit">
              Entrar
            </button>
          </label>
        </div>
        <div>
          <label />
          <div>
            <div>
              Já sou Cliente?
              <Link to="/entrar">Tela de Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
