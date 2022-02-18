import {
  ADICIONAR_ITEM_CARRINHO,
  REMOVER_ITEM_CARRINHO,
} from '../constantes/constantesCarrinhoCompras.js';
import {
  SALVAR_ENDERECO_ENVIO_FALHA,
  SALVAR_ENDERECO_ENVIO_REQUEST,
  SALVAR_ENDERECO_ENVIO_SUCESSO,
} from '../constantes/constantesEnderecoEnvio.js';

export const enderecoEnvioPedidoReducer = (state = {}, action) => {
  switch (action.type) {
    case SALVAR_ENDERECO_ENVIO_SUCESSO:
      return { ...state, endereco: action.payload };
    default:
      return state;
  }
};
