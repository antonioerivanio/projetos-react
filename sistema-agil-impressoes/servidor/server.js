import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import usuarioRotas from '../servidor/rotas/usuarioRotas.js';
import produtoRotas from './rotas/produtoRotas.js';
import { dados } from './dados.js';
//import db from './utils/db.js';

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

app.use('/api/usuarios', usuarioRotas);
app.use('/api/produtos', produtoRotas);

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
