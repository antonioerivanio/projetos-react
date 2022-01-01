import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { carrinhoReducer } from '../reducers/carrinhoReducers';
import {
  produtoDetalhesReducer,
  produtoListReducer,
} from '../reducers/produtosReducers';

const initialState = {
  carrinhoCompras: {
    itensCarrinho: localStorage.getItem('itensCarrinho')
      ? JSON.parse(localStorage.getItem('itensCarrinho'))
      : [],
  },
};
/*const reducer = (state, action) => {
  return { produtos: dadosProdutos.produtos };
};*/
const reducer = combineReducers({
  produtoList: produtoListReducer,
  produtoDetalhes: produtoDetalhesReducer,
  carrinhoCompras: carrinhoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
