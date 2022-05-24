import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
        itensPedido:[{
            nome:{ type:String, required:true},
            quantidade:{ type:Number, required:true},
            preco:{ type:Number, required:true},
            produto: { 
                type:mongoose.Schema.Types.ObjectId, 
                ref:'Produto',
                required:true,
            },
        }
    ],
    enderecoEntrega:{
        nomeCompleto:{ type:String, required:true},
        endereco:{ type:String, required:true},
        cidade:{ type:String, required:true},
        cep:{ type:String, required:true},
        estado:{ type:String, required:true},
    },
    formaPagamento:{type:String, required:true},
    precoItens:{type: Number, required:true},
    taxaEnvio: { type:Number, required:true },
    precoTotal:{ type:Number, required:true },
    usuario:{type:mongoose.Schema.Types.ObjectId, ref:'Usuario', required:true},
    isPago:{type:Boolean, default:true},
    dataPagamento:{type:Date},
    isEntregue:{type:Boolean, default:false},
    dataEntrega:{type:Date}   

},{
    timestamps:true
})

const Pedido = mongoose.model("Pedido", pedidoSchema)
export default Pedido;