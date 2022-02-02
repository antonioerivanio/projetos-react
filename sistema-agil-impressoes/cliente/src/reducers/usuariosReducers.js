import {
  USUARIO_ENTRAR_CONTA_FAIL,
  USUARIO_ENTRAR_CONTA_REQUEST,
  USUARIO_ENTRAR_CONTA_SUCESS,
  USUARIO_SAIR_CONTA,
} from '../constantes/constanteUsuario';

export const usuarioEntrarReducer = (state = {}, action) => {
  switch (action.type) {
    case USUARIO_ENTRAR_CONTA_REQUEST:
      return { loading: true };
    case USUARIO_ENTRAR_CONTA_SUCESS:
      return { loading: false, infoUsuario: action.payload };
    case USUARIO_ENTRAR_CONTA_FAIL:
      return { loading: false, error: action.payload };
    case USUARIO_SAIR_CONTA:
      return {};

    default:
      return state;
  }
};
