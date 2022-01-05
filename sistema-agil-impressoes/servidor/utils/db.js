import mongoose from 'mongoose';

const abrindoConexao = () => {
  console.log('Abrindo conexao');
  mongoose.connect(
    'mongodb://localhost:27017/ecomerce/agil?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    {
      useNewUrlParser: true,
      useUnifiedTopoly: true,
      useCreateIdex: true,
    }
  );
};

export default abrindoConexao;
