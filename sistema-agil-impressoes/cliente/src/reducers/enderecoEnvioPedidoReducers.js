import {

} from '../constantes/constantesCarrinhoCompras.js';
import {

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
