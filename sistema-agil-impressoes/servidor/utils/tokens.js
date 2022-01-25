export const gerarToken = (usuario) => {
  jwt.sing(
    {
      _id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
      isAdmin: usuario.isAdmin,
    },
    process.env.JWT_MENSAGE_SECRETA || 'mensagemsecreta'
  );
};
