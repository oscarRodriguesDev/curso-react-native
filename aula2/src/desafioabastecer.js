import { Component } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Screen1 } from "./modalCalc";
import AsyncStorage from "@react-native-async-storage/async-storage";



export class Gasosa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      input: "",
      input2: "",
      resultado:'' ,
      list:[]
    };0.0
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    //fazer o calculo
    const valor1 = Number(this.state.input);
    const valor2 = Number(this.state.input2);
    const result = valor2 / valor1;
    if (isNaN(result)) {
      alert("Insira valores validos");
    } else if (result < 0.7) {
      //abastecer com alcool
      this.setState({ resultado: "gasolina" });
      this.setState({ visible: true });
    } else {
      //abastecer com gasolina
      this.setState({ resultado: "alcool" });
      this.setState({ visible: true });
    }

    Keyboard.dismiss;
  }

  //

  async componentDidUpdate(_,prevState) {
    const gas =  this.state.input
    const alc = this.state.input2
    const res = this.state.resultado

    const valores = { gas, alc, res }; // Armazena como um objeto JSON
    if (JSON.stringify(valores) !== JSON.stringify(prevState)) {
      await AsyncStorage.setItem('lista', JSON.stringify(valores));
    }}

  render() {
    return (
      <View style={styles.container}>

        <Image source={require("./img/logogasosa.png")} style={styles.logo} />
        <Text style={styles.head}>Qual a melhor opção</Text>
        <Text style={styles.commonText}>Gasolina(preço por litro)</Text>
        <TextInput
          placeholder="R$ 0,00"
          style={styles.inputs}
          onChangeText={(texto) => this.setState({ input: texto })}
        />
        <Text style={styles.commonText}>Alcool (Preço por litro)</Text>
        <TextInput
          placeholder="R$ 0,00"
          style={styles.inputs}
          onChangeText={(texto) => this.setState({ input2: texto })}
        />
        <TouchableOpacity style={styles.btn} onPress={this.calcular}>
          <Text style={styles.commonText}>Calcular</Text>
        </TouchableOpacity>
        <Modal visible={this.state.visible}>
          <Screen1
            voltar={() => {
              this.setState({ visible: false });
            }}
          />
        </Modal>
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
  inputs: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    fontSize: 25,
  },
  btn: {
    marginTop: 25,
    width: "100%",
    height: 100,
    backgroundColor: "#DAA520",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 8,
  },
});
