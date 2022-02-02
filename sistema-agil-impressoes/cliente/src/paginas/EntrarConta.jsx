import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { entrar } from '../actions/usuariosAction';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MensageBox from '../componentes/mensages/MensageBox';

export const EntrarConta = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  let navigate = useNavigate();

  const entrarConta = useSelector((state) => state.entrarConta);
  const { infoUsuario, loading, error } = entrarConta;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(entrar(email, senha));
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
          <h1>Entrar</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MensageBox></MensageBox>}
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
          <label>
            <button className="primary" type="submit" onClick={submitHandler}>
              Entrar
            </button>
          </label>
        </div>
        <div>
          <label />
          <div>
            Novo Cliente?
            <Link to="/registrar">registrar</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
