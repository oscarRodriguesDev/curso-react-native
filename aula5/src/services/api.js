import axios from 'axios'
 
//configuração da api de cep
const url = "https://viacep.com.br/ws/"
export default axios.create({
    baseURL:url,
    })
