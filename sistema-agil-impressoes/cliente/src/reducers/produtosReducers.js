import {
  PRODUTO_DETALHES_FALHA,
  PRODUTO_DETALHES_REQUEST,
  PRODUTO_DETALHES_SUCESSO,
  PRODUTO_LIST_FALHA,
  PRODUTO_LIST_REQUEST,
  PRODUTO_LIST_SUCESSO,
} from '../constantes/constantesProdutos';

export const produtoListReducer = (
  state = { loading: true, produtos: [] },
  action
) => {
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

export const produtoDetalhesReducer = (
  state = { produto: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUTO_DETALHES_REQUEST:
      return { loading: true };
    case PRODUTO_DETALHES_SUCESSO:
      return { loading: false, produto: action.payload };
    case PRODUTO_DETALHES_FALHA:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
