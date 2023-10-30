import { useState, useEffect,useMemo}from 'react';
import { StyleSheet, Text, View,Button,TextInput,Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

  //forma de utilização do useState

  const[nome,setNome] =useState('')
  const [input,setInput] = useState('') 
  const letras =  useMemo(()=>{
    return nome.length
  },[nome])
  

useEffect(()=>{

    async function getNome(){
      const nameStorage = await AsyncStorage.getItem('@key') 
        if(nameStorage!==null){
          setNome(nameStorage) 
        }else{
          setNome("nenhum nome encontrado!") 
        }
    }

  getNome()   
},[])

  useEffect(()=>{
    async function saveName(){
      await AsyncStorage.setItem('@key', nome) 
      Keyboard.dismiss()
     
    }
   
    saveName();  
  },[nome]) 
 
  
  return (
    <View style={styles.container}>
   <Text style= {{fontSize:20}}>{nome}</Text>
   <Text>O nome {nome} possui {letras} letras</Text>
   {/* ao clicar no botão o valor de nome é alterado em tempo de execução
   utilizando a função criada dentro do useState (setNome) */}
   <Button title="Clique aqui" onPress={()=>{setNome("Amanda")}}/>

  <Text>O nome digitado será mostrado na tela</Text>
  <TextInput value={input}
   placeholder='Digite algo'
    onChangeText={(text)=>
    {setInput(text)}} />
    <Button title="Apresentar nome" onPress={()=>{setNome(input)}}/>
    </View>
  ); 
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
