
import { CARRINHO_VAZIO, DETALHES_PEDIDO_FALHA, DETALHES_PEDIDO_REQUEST, DETALHES_PEDIDO_SUCESSO, PEDIDO_CRIA_FALHA, PEDIDO_CRIA_REQUEST, PEDIDO_CRIA_SUCESSO } from "../constantes/constantesPedido"
import api from '../utils/services/api';

export const criarPedido = (pedido) => async (dispatch, getState) =>{
    dispatch({type:PEDIDO_CRIA_REQUEST, payload: pedido});

    try {
        
        const {entrarConta:{infoUsuario}} = getState();
            
        const { data } = await api.post('/api/pedidos', pedido, {
            headers:{
                Authorization: `Bearer ${infoUsuario.token}`,
            },
        });

        dispatch({type: PEDIDO_CRIA_SUCESSO, payload: data.pedido});
        dispatch({type: CARRINHO_VAZIO})
        localStorage.removeItem('itensCarrinho');
        
    }catch(error){
        dispatch({
            type: PEDIDO_CRIA_FALHA,
            payload:
              error.message && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


export const detalhesPedido = (id) => async (dispatch, getState) =>{
    dispatch({type:DETALHES_PEDIDO_REQUEST, payload: id});

    try {
        
        const {entrarConta:{infoUsuario}} = getState();
            
        const { data } = await api.post(`/api/pedidos/${id}`, {
            headers:{
                Authorization: `Bearer ${infoUsuario.token}`,
            },
        });

        dispatch({type: DETALHES_PEDIDO_SUCESSO, payload: data});
        
    }catch(error){
        dispatch({
            type: DETALHES_PEDIDO_FALHA,
            payload:
              error.message && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
}


