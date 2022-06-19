import { ADICIONAR_ITEM_CARRINHO } from '../constantes/constantesCarrinhoCompras.js';
import {

  SALVAR_ENDERECO_SUCESSO,
} from '../constantes/constantesEnderecoEnvio.js';


export const salvar = (data) => async (dispatch, getState) => {
   
  dispatch({
    type: SALVAR_ENDERECO_SUCESSO,
    payload: data,
  });

  localStorage.setItem('enderecoEntrega', JSON.stringify(data));
};
