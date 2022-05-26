import { application } from "express";
import { CARRINHO_VAZIO, PEDIDO_CRIA_FALHA, PEDIDO_CRIA_REQUEST, PEDIDO_CRIA_SUCESSO } from "../constantes/constantesPedido"
import api from '../utils/services/api';

export const criarPedido = (pedido) => async (dispatch, getState) =>{
    dispatch({type:PEDIDO_CRIA_REQUEST, payload: pedido});

    try {
        const {entrarConta:{usuarioInfo}} = getState();
        const { data } = await api.post('/api/pedidos', pedido, {
            headers:{
                Authorization: `Bearer ${usuarioInfo.token}`,
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