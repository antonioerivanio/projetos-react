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
    await Usuario.remove({});
    const usuarioCriado = await Usuario.insertMany(dados.usuarios);
    res.send({ usuarioCriado });
  })
);
usuarioRouter.get(
  '/consultar',
  expressAsyncHandler(async (req, res) => {
   
    const usuario = await Usuario.find({});
    res.send({ usuario});
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
      res.status(401).send({ message: 'Usuário não encontrado' });
    }
  })
);

usuarioRouter.post(
  '/cadastrar',
  expressAsyncHandler(async (req, res) => {
    console.log('Teste requisição');
    const usuario = new Usuario({
      nome: req.body.nome,
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha),
    });

    try {
      const usuarioCriado = await usuario.save();

      if (usuarioCriado) {
        res.send({
          _id: usuarioCriado._id,
          nome: usuarioCriado.nome,
          email: usuarioCriado.email,
          token: gerarToken(usuarioCriado),
        });
      } else {
        res.status(400).send({ mesage: 'Falha ao cadastrar usuário' });
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  })
);
export default usuarioRouter;
