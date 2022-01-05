import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Usuario from '../models/usuarioModel.js';

const usuarioRota = express.Router();

usuarioRota.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Usuario.remove({});
    const usuarioCriado = await Usuario.insertMany(dados.usuarios);
    res.send({ usuarioCriado });
  })
);

export default usuarioRota;
