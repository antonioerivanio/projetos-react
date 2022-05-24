import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PassoAPassoCompra from '../componentes/PassaAPassoCompra'
import TelaCarrinhoCompras from './TelaCarrinhoCompras'

export default function  TelaPedido() {
    const enderecoEnvio = useSelector((state) => state.endereco);
    const [carrinhoCompras, {metodoPagamento}] = useSelector((state) => state.metodoPagamento);
    const navigate = useNavigate();

    if(!metodoPagamento){
        navigate.navigate("/pagamento");
    }

  return (
    <div>
        <PassoAPassoCompra passo1 passo2 passo3 passo4></PassoAPassoCompra>
        TelaPedido
        <div className='row top'>
            <div className='col-2'>
                <ul>
                    <li>
                        <div className='card card-body'>
                            <h2>Envio</h2>
                            <p>
                                <strong>Nome:</strong> {enderecoEnvio.nomeCompleto}
                                <strong>Endereço:</strong>{enderecoEnvio.endereco},
                                {enderecoEnvio.cidade}, {enderecoEnvio.cep},
                                {enderecoEnvio.estado}

                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='card card-body'>
                            <h2>Pagamento</h2>
                            <p>
                                <strong>Forma:</strong> {metodoPagamento}
                                
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='card card-body'>
                            <h2>Itens</h2>
                               
                                <ul>
                                    {carrinhoCompras.itensCarrinho.map((item) => (
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
                                            <div>{item.quantidade} x {item.preco}= R$ {item.quantidade * item.preco}</div>
                                        </div>
                                      </li>
                                    ))}
                                </ul>
                                
                            </div>
                    </li>
                </ul>
            </div>
            <div className='col-1'>

            </div>
        </div>    
    </div>
  )
}

