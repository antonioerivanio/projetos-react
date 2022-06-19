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

export const isAuth = (req, res, next) => {
  console.log(req.headers.authorization)
  const authorization = req.headers.authorization;
  if(authorization) {
    const token = authorization.slice(7, authorization.length);//Bearer xxxxxx
    jwt.verify(token, process.env.JWT_MENSAGE_SECRETA || 'somethingsecret', (err, decode) =>{
      if(err){
        res.status(401).send({mensage:'Invad Token'})
      }else{
        res.usuario = decode;
        next();
      }
    })
  }else{
    res.status(401).send({mensage:'Nenhum Token encontrado'})
  }
};

