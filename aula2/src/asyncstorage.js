import { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard
} from "react-native";

export default class Asinc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      nome: "",
    };
    this.gravaNome= this.gravaNome.bind(this)
}
gravaNome(){
   this.setState({nome:this.state.input})
   alert('gravado com sucesso!')
   Keyboard.dismiss()//fecha o teclado
   //vamos ver como fazer a gravação do valor
}

//componentDidmount //executando qando o app é montado
async componentDidMount() {
  const input =  this.state.input
  //recuperar o que ta gravado
  try{
    let value = await AsyncStorage.getItem('nome');
    if (value !== null){   
        // We have data!!
        
        this.setState({input: value});   
        }else{ console.error("Error reading value!");
            }
            }catch (error) {
                console.warn("Something went wrong", error);
                } 
      
}
 
//componentWillUnmount oposto quando é desmontado
componentWillUnmount() {
    
}

//componentDidUpdate exxecutado toda vez que um componente é atualizado
async componentDidUpdate(_,prevState){
 const nome =  this.state.nome
 if(nome!==prevState){
   await AsyncStorage.setItem('nome',nome) //assim gravamos valores
 }
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>escreva seu nome</Text>
        <View style={styles.inputScreen}>
          <TextInput
            style={styles.inputy}
            value = {this.state.input}
            onChangeText={(texto) => this.setState({ input: texto })}
          />
          <TouchableOpacity style={styles.btn} onPress={this.gravaNome}>
            <Text style={{fontSize:25}}>°</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.apresetacao}>{this.state.input}</Text>
      </View> 
    );
  }
}

/**Estilos da classe */
const styles = StyleSheet.create({
  inputy: {
    width:350,
    height:40,
    color: "#990000",
    borderWidth: 2,
    borderColor: "#000",
    fontSize:18

  },

  apresetacao:{
    position:'absolute',
    fontSize:35,
   
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 500,
    width: 375,
  },
  inputScreen:{
    flex:1,
    flexDirection:'row'
  },
  btn:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#20aaa2',
    height:40,
  }
});
