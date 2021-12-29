import express from 'express';
import cors from 'cors';

import { dadosProdutos } from './dadosProdutos.js';

const app = express();
app.use(cors());
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
