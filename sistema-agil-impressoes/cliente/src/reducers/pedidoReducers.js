import { DETALHES_PEDIDO_FALHA, DETALHES_PEDIDO_REQUEST, DETALHES_PEDIDO_SUCESSO, PEDIDO_CRIADO_RESET, PEDIDO_CRIA_FALHA, PEDIDO_CRIA_REQUEST, PEDIDO_CRIA_SUCESSO } from "../constantes/constantesPedido";

export const pedidoReducer = (state={loading:true, pedido:{}}, action) => {
    switch(action.type){
        case PEDIDO_CRIA_REQUEST:
            return {loading:true};
        case PEDIDO_CRIA_SUCESSO:
            return {loading:false, sucesso:true, pedido:action.payload};
        case PEDIDO_CRIA_FALHA:
            return {loading:false, error:action.payload
            }
        case PEDIDO_CRIADO_RESET:
            return {}
        default: return state;
    }
}

export const detalhesPedidoReducer = (state={}, action) => {
    switch(action.type){
        case DETALHES_PEDIDO_REQUEST:
            return {loading:true};
        case DETALHES_PEDIDO_SUCESSO:
            return {loading:false, sucesso:true, pedido:action.payload};
        case DETALHES_PEDIDO_FALHA:
            return {loading:false, error:action.payload
            }
       default: return state;
    }
}