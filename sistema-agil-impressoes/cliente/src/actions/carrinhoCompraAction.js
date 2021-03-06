import {
  ADICIONAR_ITEM_CARRINHO,
  FINALIZAR_PAGAMENTO,
  REMOVER_ITEM_CARRINHO,
  TIPO_PAGAMENTO,
} from '../constantes/constantesCarrinhoCompras.js';
import api from '../utils/services/api';

export const adicionarItemAoCarrinho =
  (produtoId, quantidade) => async (dispatch, getState) => {
    const { data } = await api.get(`/api/produtos/${produtoId}`);

    dispatch({
      type: ADICIONAR_ITEM_CARRINHO,
      payload: {
        nome: data.nome,
        imagem: data.image,
        preco: data.preco,
        quantidadeEmEstoque: data.quantidadeEmEstoque,
        produto: data._id,
        quantidade: quantidade,
      },
    });
    localStorage.setItem(
      'itensCarrinho',
      JSON.stringify(getState().carrinhoCompras.itensCarrinho)
    );
  };

export const removerItemCarrinho = (produtoId) => (dispatch, getState) => {
  dispatch({
    type: REMOVER_ITEM_CARRINHO,
    payload: produtoId,
  });
  localStorage.setItem(
    'itensCarrinho',
    JSON.stringify(getState().carrinhoCompras.itensCarrinho)
  );
};


export const finalizarPagamento = (data) => (dispatch) => {
  dispatch({
    type: TIPO_PAGAMENTO,
    payload: data,
  });
  
};
