import express from 'express';
import cors from 'cors';
import usuarioRotas from '../servidor/rotas/usuarioRotas.js';

import { dados } from './dados.js';
//import db from './utils/db.js';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecomerce';

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!');
  }
);

app.get('/api/produtos/:id', (req, res) => {
  if (req.params.id !== 'undefined' && req.params.id !== '0') {
    const produto = dados.produtos.find((p) => p._id === req.params.id);
    if (produto) {
      res.send(produto);
    } else {
      res.status(404).send({ message: 'Produto não encontrado!' });
    }
  }
});

app.get('/api/produtos', (req, res) => {
  res.send(dados.produtos);
});

app.use('/api/usuarios', usuarioRotas);

app.get('/', (req, res) => {
  res.send('Servidor está pronto');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server em http://localhost:5000');
});
