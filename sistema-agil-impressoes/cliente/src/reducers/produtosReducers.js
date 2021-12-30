import {
  PRODUTO_LIST_FALHA,
  PRODUTO_LIST_REQUEST,
  PRODUTO_LIST_SUCESSO,
} from '../constantes/constantesProdutos';

export const produtoListReducer = (state = { produtos: [] }, action) => {
  switch (action.type) {
    case PRODUTO_LIST_REQUEST:
      return { loading: true };
    case PRODUTO_LIST_SUCESSO:
      return { loading: false, produtos: action.payload };
    case PRODUTO_LIST_FALHA:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
