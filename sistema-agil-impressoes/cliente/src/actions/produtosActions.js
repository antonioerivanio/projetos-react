import api from '../utils/services/api';
import {
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
