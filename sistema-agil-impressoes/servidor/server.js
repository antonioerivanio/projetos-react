import express from 'express';
import cors from 'cors';

import { dadosProdutos } from './dadosProdutos.js';

const app = express();
app.use(cors());

app.get('/api/produtos/:id', (req, res) => {
  const produto = dadosProdutos.produtos.find(
    (p) => p._id === req.params.id[1]
  );
  if (produto) {
    res.send(produto);
  } else {
    res.status(404).send({ message: 'Produto não encontrado!' });
  }
});

app.get('/api/produtos', (req, res) => {
  res.send(dadosProdutos.produtos);
});

app.get('/', (req, res) => {
  res.send('Servidor está pronto');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server em http://localhost:5000');
});
