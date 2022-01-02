import {
  ADICIONAR_ITEM_CARRINHO,
  REMOVER_ITEM_CARRINHO,
} from '../constantes/constantesCarrinhoCompras.js';

export const carrinhoReducer = (state = { itensCarrinho: [] }, action) => {
  switch (action.type) {
    case ADICIONAR_ITEM_CARRINHO:
      const item = action.payload;
      const itemJaExiste = state.itensCarrinho.find(
        (x) => x.produto === item.produto
      );
      if (itemJaExiste) {
        return {
          ...state,
          itensCarrinho: state.itensCarrinho.map((c) =>
            c.produto === itemJaExiste.produto ? item : c
          ),
        };
      } else {
        return { ...state, itensCarrinho: [...state.itensCarrinho, item] };
      }
    case REMOVER_ITEM_CARRINHO:
      return {
        ...state,
        itensCarrinho: state.itensCarrinho.filter(
          (i) => i.produto !== action.payload
        ),
      };
    default:
      return state;
  }
};
