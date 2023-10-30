import { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

export class Screen1 extends Component {

  constructor(props){
    super(props);
    this.state ={
      valor : ''
    }
    this.voltar=this.voltar.bind(this)
    
  }
  voltar(){
this.props.voltar()
  }

  async componentDidMount(){
    try {
      const valoresString = await AsyncStorage.getItem('lista');
      if (valoresString !== null) {
        const valores = JSON.parse(valoresString); // Converte a string JSON em um objeto JavaScript
         this.setState({valor:valores})
         alert(valores.res)
      } else {
        console.log("Nenhum valor foi encontrado em AsyncStorage.");
      }
    } catch (error) {
      console.error("Erro ao recuperar valores de AsyncStorage:", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./img/gas.png")} style={styles.logo} />
        <Text style={styles.resultado}>Compensa usar {this.state.valor.res}</Text>
        <Text style={styles.result1}>Com os preços</Text>
        <Text style={styles.valores}>Gasolina custando: R$ {this.state.valor.gas}</Text>
        <Text style={styles.valores}>Alcool custando: R$ {this.state.valor.alc}</Text>

        <TouchableOpacity style={styles.btn}  onPress={this.voltar}>
          <Text style={styles.commonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    marginTop: 50,
  },
  head: {
    fontSize: 34,
    color: "white",
    fontWeight: "bold",
  },
  commonText: {
    color: "white",
    fontSize: 30,
  },
  resultado: {
    color: "green",
    fontWeight:'bold',
    fontSize: 36,
  },

  result1: {
    color: "white",
    fontWeight:'bold',
    fontSize: 36,
  },
  valores: {
    color: "white",
    fontSize: 30,
  },
  inputs: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    fontSize: 25,
  },
  btn:{
    marginTop:25,
    width:'100%',
    height:100,
    backgroundColor:'#DAA520',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:8,
  }
});
