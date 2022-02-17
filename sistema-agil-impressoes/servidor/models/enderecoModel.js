import mongoose from 'mongoose';

const enderecoSchema = new mongoose.Schema(
  {
    nomeCompleto: { type: String, required: true },
    endereco: { type: String, required: true, unique: true },
    numero: { type: Number, required: true },
    cep: { type: String, default: false, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Endereco = mongoose.model('Endereco', enderecoSchema);

export default Endereco;
