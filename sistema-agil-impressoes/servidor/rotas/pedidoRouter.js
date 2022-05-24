import expressAsyncHandler from 'express-async-handler'
import Pedido from '../models/pedidoModel';
import { isAuth } from '../utils/tokens';

const pedidoRouter = express.Router();
pedidoRouter.post('/', isAuth, expressAsyncHandler(async(req, res)=>{
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
        precoTotal: req.body.precoTotal,
        usuario:req.usuario_id,
    });

    const pedidoCriado = await pedido.save();
    res.status(201).send({mensage: 'Novo pedido Criado', pedido: pedidoCriado});
}
}));

export default pedidoRouter;