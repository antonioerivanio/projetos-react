import api from '../utils/services/api';
import {
  PRODUTO_DETALHES_FALHA,
  PRODUTO_DETALHES_REQUEST,
  PRODUTO_DETALHES_SUCESSO,
  PRODUTO_LIST_FALHA,
  PRODUTO_LIST_REQUEST,
  PRODUTO_LIST_SUCESSO,
} from '../constantes/constantesProdutos';

export const listaProdutos = () => async (dispatch) => {
  dispatch({ type: PRODUTO_LIST_REQUEST });
  try {
    const { data } = await api.get('/api/produtos');
    dispatch({ type: PRODUTO_LIST_SUCESSO, payload: data });
  } catch (error) {
    dispatch({ type: PRODUTO_LIST_FALHA, payload: error.message });
  }
};

export const detalhesProdutoPorId = (produtoId) => async (dispatch) => {
  dispatch({ type: PRODUTO_DETALHES_REQUEST, payload: produtoId });
  try {
    const { data } = await api.get(`/api/produtos/:${produtoId}`);
    dispatch({ type: PRODUTO_DETALHES_SUCESSO, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUTO_DETALHES_FALHA,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
