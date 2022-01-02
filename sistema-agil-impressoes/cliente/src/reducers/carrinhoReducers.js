import { ADD_ITEM_CARRINHO } from '../constantes/constantesCarrinhoCompras.js';

export const carrinhoReducer = (state = { itensCarrinho: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_CARRINHO:
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

    default:
      return state;
  }
};
