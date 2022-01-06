import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    categoria: { type: String },
    image: { type: String },
    preco: { type: Number },
    quantidadeEmEstoque: { type: Number },
    marca: { type: String },
    avaliacao: { type: Number },
    numVisualizacoes: { type: Number },
    descricao: { type: String },
  },
  {
    timestamps: true,
  }
);
const Produto = mongoose.model('Produto', produtoSchema);

export default Produto;
