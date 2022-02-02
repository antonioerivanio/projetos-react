import jwt from 'jsonwebtoken';

export const gerarToken = (usuario) => {
  return jwt.sign(
    {
      _id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
      isAdmin: usuario.isAdmin,
    },
    process.env.JWT_MENSAGE_SECRETA || 'mensagemsecreta',
    {
      expiresIn: '30d',
    }
  );
};
