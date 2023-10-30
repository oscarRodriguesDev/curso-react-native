import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {

  //forma de utilização do useState

  const[nome,setNome] =useState('Oscar')
  const [input,setInput] = useState('')
  return (
    <View style={styles.container}>
   <Text style= {{fontSize:20}}>{nome}</Text>
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
