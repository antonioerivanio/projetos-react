import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Produto from '../models/produtoModel.js';

const produtoRoter = express.Router();

produtoRoter.get('/seed', async (req, res) => {
  await Produto.remove({});
  const produtoSalvo = await Produto.insertMany(dados.produtos);
  res.send({ produtoSalvo });
});

produtoRoter.get('/', async (req, res) => {
  const produtos = await Produto.find({});
  if (produtos) res.send(produtos);
  else res.status(404).send({ message: 'produtos não encontrados' });
});

produtoRoter.get('/:id', async (req, res) => {
  const produto = await Produto.findById(req.params.id);
  if (produto) res.send(produto);
  else res.status(404).send({ message: 'produto não encontrado' });
});

export default produtoRoter;
