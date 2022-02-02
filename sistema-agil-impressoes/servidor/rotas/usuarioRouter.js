import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { dados } from '../dados.js';
import Usuario from '../models/usuarioModel.js';
import { gerarToken } from '../utils/tokens.js';
import bcrypt from 'bcryptjs';

const usuarioRouter = express.Router();

usuarioRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Usuario.remove({});
    const usuarioCriado = await Usuario.insertMany(dados.usuarios);
    res.send({ usuarioCriado });
  })
);

usuarioRouter.post(
  '/entrar',
  expressAsyncHandler(async (req, res) => {
    const usuario = await Usuario.findOne({ email: req.body.email });

    if (usuario) {
      if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
        res.send({
          _id: usuario._id,
          nome: usuario.nome,
          email: usuario.email,
          isAdmin: usuario.isAdmin,
          token: gerarToken(usuario),
        });
      }
      return;
    } else {
      res.status(404).send({ message: 'Usuário não encontrado' });
    }
  })
);

export default usuarioRouter;
