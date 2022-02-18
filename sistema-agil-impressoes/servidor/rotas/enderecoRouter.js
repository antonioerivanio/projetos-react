import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Endereco from '../models/enderecoModel.js';
import { gerarToken } from '../utils/tokens.js';
import bcrypt from 'bcryptjs';

const enderecoRouter = express.Router();

enderecoRouter.get(
  '/pedido/consultar',
  expressAsyncHandler(async (req, res) => {
    console.log('ok');
    //await Usuario.remove({});
    const usuarioCriado = await Usuario.find();

    res.send({ usuarioCriado });
  })
);

enderecoRouter.post(
  '/pedido/salvar',
  expressAsyncHandler(async (req, res) => {
    const enderecoNovo = new Endereco({
      nomeCompleto: req.body.nomeCompleto,
      endereco: req.body.endereco,
      numero: req.body.numero,
      cep: req.body.cep,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
    });

    const enderecoSalvo = await enderecoNovo.save(function (err) {
      console.log(err);
    });

    console.log(enderecoSalvo);

    if (enderecoSalvo) {
      res.send({ message: 'Sucesso!' });
      return;
    } else {
      res.status(401).send({ message: 'Falha ao salvar o endereço' });
    }
  })
);

export default enderecoRouter;
