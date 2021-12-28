import express from 'express';
import { dadosProdutos } from './dadosProdutos.js';

const app = express();

app.get('/api/produtos', (req, res) => {
  res.json(dadosProdutos.produtos);
});

app.get('/', (req, res) => {
  res.send('Servidor está pronto');
});
app.listen(5000, () => {
  console.log('Server em http://localhost:5000');
});
