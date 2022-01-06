import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Produto from '../models/produtoModel.js';

const produtoRoter = express.Router();

produprodutoRoter.get('/seed', async (req, res) => {
  await Produto.remove({});
  const produtoSalvo = await Produto.insertMany(dados.produtos);
  res.send({ produtoSalvo });
});

export default produtoRoter;
