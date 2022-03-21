import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { carrinhoReducer } from '../reducers/carrinhoReducers';
import {
  enderecoEnvioPedidoReducer,
  enderecoEnvioReducer,
} from '../reducers/enderecoEnvioPedidoReducers';
import {
  produtoDetalhesReducer,
  produtoListReducer,
} from '../reducers/produtosReducers';
import {
  usuarioCadastroContaReducer,
  usuarioEntrarReducer,
} from '../reducers/usuariosReducers';

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
      metodoPagamento:'Paypal'
  },
  endereco: localStorage.getItem('enderecoCompra')
    ? JSON.parse(localStorage.getItem('enderecoCompra'))
    : {},

};

const reducer = combineReducers({
  produtoList: produtoListReducer,
  produtoDetalhes: produtoDetalhesReducer,
  carrinhoCompras: carrinhoReducer,
  entrarConta: usuarioEntrarReducer,
  cadastrarConta: usuarioCadastroContaReducer,
  endereco: enderecoEnvioPedidoReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
