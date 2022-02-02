import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { carrinhoReducer } from '../reducers/carrinhoReducers';
import {
  produtoDetalhesReducer,
  produtoListReducer,
} from '../reducers/produtosReducers';
import { usuarioEntrarReducer } from '../reducers/usuariosReducers';

const initialState = {
  entrarConta: {
    infoUsuario: localStorage.getItem('infoUsuario')
      ? localStorage.getItem('infoUsuario')
      : null,
  },
  carrinhoCompras: {
    itensCarrinho: localStorage.getItem('itensCarrinho')
      ? JSON.parse(localStorage.getItem('itensCarrinho'))
      : [],
  },
};

const reducer = combineReducers({
  produtoList: produtoListReducer,
  produtoDetalhes: produtoDetalhesReducer,
  carrinhoCompras: carrinhoReducer,
  entrarConta: usuarioEntrarReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
