import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Usuario from '../models/usuarioModel.js';

const usuarioRouter = express.Router();

usuarioRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Usuario.remove({});
    const usuarioCriado = await Usuario.insertMany(dados.usuarios);
    res.send({ usuarioCriado });
  })
);

usuarioRouter.post('/registrar');

export default usuarioRouter;
