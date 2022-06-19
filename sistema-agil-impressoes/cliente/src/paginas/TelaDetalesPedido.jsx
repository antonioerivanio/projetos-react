import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { criarPedido, detalhesPedido } from '../actions/pedidoAction';
import LoadingBox from '../componentes/mensages/LoadingBox';
import MessageBox from '../componentes/mensages/MensageBox';
import PassoAPassoCompra from '../componentes/PassaAPassoCompra';
import { PEDIDO_CRIADO_RESET } from '../constantes/constantesPedido';


export default function TelaPedido(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { id: pedidoId } = params;
  
    const detalhesPedido = useSelector((state) => state.detalhesPedido);
    const pedido = useSelector((state) => state.pedido);
    const {loading, sucesso, error} =  pedido;


    useEffect(()=>{
        dispatch(detalhesPedido(pedidoId))
    },[dispatch, pedidoId])

    useEffect(()=>{
        if(sucesso){
            navigate(`/detalhesPedido/${pedido._id}`)
            dispatch({type:PEDIDO_CRIADO_RESET});
        }
    },[dispatch, sucesso, pedido])
    return loading
    ? (<LoadingBox></LoadingBox>): error ? ( <MessageBox variant="danger">{error}</MessageBox>)
    : (<div>
        pedido {pedidoId}
        <div className='row top'>
            <div className='col-2'>
                <ul>
                    <li>
                      
                    <div className='card card-body'>
                       <h2>Endereço de Entrega</h2>
                       <p>
                            <strong>Nome:</strong> {detalhesPedido.enderecoEnvio.nomeCompleto}
                            <strong>Endereço:</strong> 
                            {detalhesPedido.enderecoEnvio.cidade}, {detalhesPedido.enderecoEnvio.cep},
                                        
                        </p>
                        {pedido.isEntregue ? (
                        <MessageBox variant="sucesso">
                                            Delivered at {pedido.dataEntrega}
                         </MessageBox>
                         ) : <MessageBox variant="danger"> Pedido Pendente</MessageBox>}
                    </div>
                            
                        
                    </li>
                    <li>
                        <div className='card card-body'>
                            <h2>Forma de Pagamento</h2>
                             <p>
                                <strong>Metodo:</strong> {detalhesPedido.metodoPagamento}
                             </p>
                              {pedido.isPago ? (
                                        <MessageBox variant="sucesso">
                                            Pago at {pedido.dataPagamento}
                                        </MessageBox>
                                    ) : <MessageBox variant="danger"> Pagamento Pendente</MessageBox>}
                                </div>
                            </li>
                </ul>
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li>
                            <h2>Resumo do Pedido</h2>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Itens</div>
                                <div>${pedido.preco.toFixed(2)}</div>
                        
                            </div>

                       </li>

                       <li>
                          <div className='row'>
                            <div>Entrega</div>
                            <div>${pedido.preco.toFixed(2)}</div>
                         </div>

                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>);
               
}