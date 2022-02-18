import { ADICIONAR_ITEM_CARRINHO } from '../constantes/constantesCarrinhoCompras.js';
import {
  SALVAR_ENDERECO_ENVIO,
  SALVAR_ENDERECO_ENVIO_FALHA,
  SALVAR_ENDERECO_ENVIO_REQUEST,
  SALVAR_ENDERECO_ENVIO_SUCESSO,
} from '../constantes/constantesEnderecoEnvio.js';
import api from '../utils/services/api';

export const salvar = (data) => async (dispatch, getState) => {
  dispatch({
    type: SALVAR_ENDERECO_ENVIO_SUCESSO,
    payload: data,
  });

  localStorage.setItem('enderecoCompra', JSON.stringify(data));
};
