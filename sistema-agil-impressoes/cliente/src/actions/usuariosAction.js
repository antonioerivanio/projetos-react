import {
  USUARIO_ENTRAR_CONTA_FAIL,
  USUARIO_ENTRAR_CONTA_REQUEST,
  USUARIO_ENTRAR_CONTA_SUCESS,
  USUARIO_SAIR_CONTA,
} from '../constantes/constanteUsuario';
import api from '../utils/services/api';

export const entrar = (email, senha) => async (dispatch) => {
  dispatch({ type: USUARIO_ENTRAR_CONTA_REQUEST, payload: { email, senha } });

  try {
    const { data } = await api.post(`/api/usuarios/entrar`, { email, senha });
    dispatch({
      type: USUARIO_ENTRAR_CONTA_SUCESS,
      payload: data,
    });
    localStorage.setItem('infoUsuario', JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ENTRAR_CONTA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sair = () => (dispatch) => {
  localStorage.removeItem('infoUsuario');
  localStorage.removeItem('itensCarrinho');

  dispatch({
    type: USUARIO_SAIR_CONTA,
  });
};
