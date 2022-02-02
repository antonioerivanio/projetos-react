import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import usuarioRouter from '../servidor/rotas/usuarioRouter.js';
import produtoRouter from './rotas/produtoRouter.js';
import bodyParser from 'body-parser';
//import db from './utils/db.js';

dotenv.config();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
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

app.use('/api/usuarios', usuarioRouter);
app.use('/api/produtos', produtoRouter);

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
