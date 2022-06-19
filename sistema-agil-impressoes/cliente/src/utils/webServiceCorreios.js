import axios from 'axios';

export function getEnderecoPorCep(cep){
    try {
        
      return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    } catch (error) {

      console.error(error);
    }
  }
  



