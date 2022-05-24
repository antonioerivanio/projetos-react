import expressAsyncHandler from 'express-async-handler'
import Pedido from '../models/pedidoModel';

const pedidoRouter = express.Router();
pedidoRouter.post('/', expressAsyncHandler(async(req, res)=>{
    if(req.body.itensPedido.length===0){
        res.status(400).send({message: 'Carrinho está vazio'})
;    }else{
    const pedido = new Pedido({
        itensPedido:req.body.itensPedido,
        enderecoEntrega:req.body.enderecoEntrega,
        formaPagamento:req.body.formaPagamento,
        precoItens:req.body.precoItens,
        taxaEntrega:req.body.taxaEnvio,
        taxaPreco:req.body.taxaPreco,
        precoTotal: req.body.precoTotal

    })
}
}));