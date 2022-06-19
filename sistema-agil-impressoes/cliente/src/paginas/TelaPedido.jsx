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
    const navigate = useNavigate();  

    const enderecoEnvio = useSelector((state) => state.endereco);
    const carrinhoCompras = useSelector((state) => state.carrinhoCompras);
    const {entrarConta} = useSelector((state) => state.entrarConta);
    const {infoUsuario} = entrarConta;
    const { itensCarrinho } = carrinhoCompras;

    const pedidoCriado = useSelector((state) => state.pedido);
    const {loading, sucesso, error, pedido} =  pedidoCriado;

    const paraPreco = (num) => Number(num.toFixed(2));
    carrinhoCompras.precoItens = paraPreco(
        carrinhoCompras.itensCarrinho.reduce((a,c) => a + c.quantidade * c.preco, 0)
        );
    carrinhoCompras.taxaEnvio  = carrinhoCompras.preco > 100 ? paraPreco(0) : paraPreco(10);
    carrinhoCompras.precoImposto = Number(paraPreco(0.15* carrinhoCompras.precoItens)).toFixed(2);
    carrinhoCompras.precoTotal = Number(carrinhoCompras.precoItens + carrinhoCompras.precoEnvio + carrinhoCompras.precoImposto).toFixed(2);
    carrinhoCompras.enderecoEntrega = enderecoEnvio;
    carrinhoCompras.usuario=infoUsuario;

    const dispatch = useDispatch();

    const fazerPedidoHandler= () =>
    {
        
        dispatch(criarPedido({...carrinhoCompras, itensPedido: carrinhoCompras.itensCarrinho}))
    }
console.log(sucesso);
    useEffect(()=>{
        if(sucesso){
            navigate(`/detalhesPedido/${pedido._id}`)
            dispatch({type:PEDIDO_CRIADO_RESET});
        }
    },[dispatch, sucesso, pedido])

    return (
        <div>
            <PassoAPassoCompra passo1 passo2 passo3 passo4></PassoAPassoCompra>
            <div className="row top">
                
                <div className="col-2"> 
                        <ul>
                            <li>
                                <div className='card card-body'>
                                    <h2>Endereço de Entrega</h2>
                                    <p>
                                        <strong>Nome:</strong> {enderecoEnvio.nomeCompleto}
                                        <strong>Endereço:</strong> 
                                        {enderecoEnvio.cidade}, {enderecoEnvio.cep},
                                        
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
                                        <strong>Metodo:</strong> {carrinhoCompras.metodoPagamento}
                                </p>
                                {pedido.isPago ? (
                                        <MessageBox variant="sucesso">
                                            Pago at {pedido.dataPagamento}
                                        </MessageBox>
                                    ) : <MessageBox variant="danger"> Pagamento Pendente</MessageBox>}
                                </div>
                            </li>
                         
                            <li>
                                <div className='card card-body'>
                                <strong>Itens do Pedido</strong>
                                <ul>
                        { itensCarrinho.map((item) => (
                        <li key={item.produto}>
                            <div className="row">
                            <div>
                                <img src={item.imagem} alt={item.nome} className="small" />
                            </div>

                            <div className="min-30">
                                <Link to={`/api/produtos/${item.produto}`}>
                                {item.nome}
                                </Link>
                            </div>                  
                            <div>{item.quantidade} x ${item.preco} = ${item.quantidade*item.preco}</div>              
                            </div>
                        </li>
                        ))}
                    </ul>
                    </div>
                    </li>
                </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <h2>
                                    Pedido
                                </h2>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Itens</div>
                                    <div>${carrinhoCompras.precoItens}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Envio</div>
                                    <div>${carrinhoCompras.precoEnvio}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Imposto</div>
                                    <div>${carrinhoCompras.precoImposto}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div><strong>Total Pedido</strong></div>
                                    <div><strong>${carrinhoCompras.precoTotal}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button type="submit" className='primary block' disabled={carrinhoCompras.itensCarrinho ===0} onClick={fazerPedidoHandler}>Finalizar Compra</button>
                            </li>
                            {
                                loading && <LoadingBox></LoadingBox>
                            }
                            { error && <MessageBox></MessageBox>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}