import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Usuario from '../models/usuarioModel.js';
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
    console.log('ok');
    const enderecoSalvo = await Endereco.save({
      nomeCompleto,
      endereco,
      numero,
      cep,
      bairro,
      cidade,
    });

    if (enderecoSalvo) {
      res.send({ message: 'Sucesso!' });
      return;
    } else {
      res.status(401).send({ message: 'Falha ao salvar o endereço' });
    }
  })
);
export default enderecoRouter;
