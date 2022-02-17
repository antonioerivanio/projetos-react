import { ADICIONAR_ITEM_CARRINHO } from '../constantes/constantesCarrinhoCompras.js';
import {
  SALVAR_ENDERECO_ENVIO,
  SALVAR_ENDERECO_ENVIO_FALHA,
  SALVAR_ENDERECO_ENVIO_REQUEST,
  SALVAR_ENDERECO_ENVIO_SUCESSO,
} from '../constantes/constantesEnderecoEnvio.js';
import api from '../utils/services/api';

export const salvar =
  (nomeCompleto, endereco, numero, cep, bairro, cidade) => async (dispatch) => {
    // console.log(getState());
    dispatch({
      type: SALVAR_ENDERECO_ENVIO_REQUEST,
    });

    const { data } = await api.post('/api/enderecos/pedido/salvar', {
      nomeCompleto,
      endereco,
      numero,
      cep,
      bairro,
      cidade,
    });
    try {
      dispatch({
        type: SALVAR_ENDERECO_ENVIO_SUCESSO,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SALVAR_ENDERECO_ENVIO_FALHA,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
