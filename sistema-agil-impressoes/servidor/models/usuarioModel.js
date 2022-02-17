import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    endereco: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
