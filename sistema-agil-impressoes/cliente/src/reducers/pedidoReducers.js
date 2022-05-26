import { PEDIDO_CRIADO_RESET, PEDIDO_CRIA_FALHA, PEDIDO_CRIA_REQUEST, PEDIDO_CRIA_SUCESSO } from "../constantes/constantesPedido";

export const pedidoCriadoReducer = (state={}, action) => {
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