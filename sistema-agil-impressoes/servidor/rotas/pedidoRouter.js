import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import Pedido from '../models/pedidoModel.js';
import { isAuth } from '../utils/tokens.js';

const pedidoRouter = express.Router();

pedidoRouter.post('/', isAuth, expressAsyncHandler(async(req, res)=>{
     
    if(req.body.itensPedido.length===0){
        res.status(400).send({message: 'Carrinho está vazio'})
   }else{
        const pedido = new Pedido({
            itensPedido:req.body.itensPedido,
            enderecoEntrega:req.body.enderecoEntrega,
            formaPagamento:req.body.metodoPagamento,
            precoItens:req.body.precoItens,
            taxaEnvio:req.body.taxaEnvio,
            taxaPreco:req.body.taxaPreco,
            precoTotal: req.body.precoTotal,
            usuario:req.body.usuario_id,
    });

    const pedidoCriado = await pedido.save();
    res.status(201).send({mensage: 'Novo pedido Criado', pedido: pedidoCriado});
}
}));


pedidoRouter.post('/id', isAuth, expressAsyncHandler(async(req, res)=>{

    if(req.body.id.length===0){
        res.status(201).send({message: 'item nao encontrado'})
   }else{
    const pedido = await Pedido.find(req.params.id);
    if (pedido) res.send(pedido);
    else res.status(404).send({ message: 'pedido não encontrados' });
    };
}));


export default pedidoRouter;