import { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Conversor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor</Text>
        <Text style={styles.subtitle}>Converter de USDC para BLR</Text>
        <TextInput
          placeholder="Digite o Valor"
          value={this.state.valor}
          onChangeText={(text) =>
            this.setState({
              valor: text,
            })
            
          }
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TouchableOpacity
          title="Converter"
          onPress={() => {
            alert("realizar conversão");
          }}
          style={styles.botão}
        >
            <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>R$ 0.00</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "99%",
    height: "90%",
    marginTop: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  resultado: {
    fontSize: 28,
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 36,
    paddingBottom: 10,
  },
  subtitle: {
    color: "gray",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput: {
    width: "70%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
  },
  botão: {
    width: "70%",
    height: 40,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText:{
    color:"#FFF",
    fontSize: 18,
    fontWeight: "bold"

  }
});
