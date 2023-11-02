import {useEffect,useState} from 'react'
import { View, Text, TextInput,StyleSheet } from "react-native";
import api from './src/services/api';


const Formulario = () => {

const [cep,setCep] = useState('000000000')
const [rua,setRua] = useState('rua dos bobos')
const [bairro,setBairro] = useState('bairro dos bobos')
const [cidade,setCidade] = useState('cidade dos bobos')
const [estado,setEstado] = useState('estado dos bobos')

//função para comunicar com api e pesquisar pelo cep
async function buscarDados(){
  const response = await api.get(`${cep}/json`)
  setRua(response.data.logradouro)
  setBairro(response.data.bairro)
  setCidade(response.data.localidade)
  setEstado(response.data.uf) 
  }


useEffect(()=>{
 
try{
  if (cep !== '000000000'){
  buscarDados()
    }else{
      setRua('rua dos bobos')
      setBairro('bairro dos bobos')
      setCidade('cidade dos bobos') 
      setEstado('estado dos bobos')
      
    }
  }catch(error){
    alert('CEP não existe!')
  }
    },[cep])
   
     //tratar erros caso o cep não e




  return (
    <View style = {styles.container}>
        <Text style={styles.textos}>Informe o CEP</Text>

        <TextInput 
        style={styles.inputs}
          placeholder='CEP'
          value={cep}
          onChangeText={setCep}
          />
         
          

        <Text style={styles.textos}>Informe a rua</Text>

        <TextInput
         style={styles.inputs}
          placeholder='Rua'
          value={rua}
         
          />
        <Text style={styles.textos}>Informe o bairro</Text>

        <TextInput
         style={styles.inputs}
          placeholder='Bairro'
          value={bairro}
          />

        <Text style={styles.textos}>Informe a cidade</Text>

        <TextInput
         style={styles.inputs}
          placeholder='Cidade'
          value={cidade}
          />
        <Text style={styles.textos}>Informe o estado</Text>
        <TextInput
         style={styles.inputs} 
         placeholder='Estado'
         value={estado}
         />

    </View>
  );
};

export default Formulario;

const styles = StyleSheet.create({
    container: {
     marginTop:25,
     alignItems:'center',
     justifyContent:'center'    
    },

    textos:{
        fontSize:20,
        fontWeight:'bold'
    },

    inputs:{
        fontSize:20
    }


})