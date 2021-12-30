import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { produtoListReducer } from '../reducers/produtosReducers';

const initialState = {};
/*const reducer = (state, action) => {
  return { produtos: dadosProdutos.produtos };
};*/
const reducer = combineReducers({
  produtoList: produtoListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
