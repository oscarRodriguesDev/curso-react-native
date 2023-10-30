import react, { Component } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default class BancoReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      idade: 0,
      sexo: "Masculino",
      limite: "",
      estudante:false,
      ok: 0,
    };
  }
  verificar() {
    if (this.state.nome == "") {
      alert("Preencha o campo Nome");
    } else if (this.state.idade == "0") {
      alert("Preencha a Idade");
    } else if (this.state.sexo == "") {
      alert("Selecione um Sexo");
    } else if (this.state.limite == "") {
      alert("Insira seu Limite de Crédito");
    } else if (this.state.estudante == "") {
      alert("Marque se é Estudante");
    } else {
      alert(
        `Nome ${this.state.nome}\nIdade:${this.state.idade}\nSexo:${this.state.sexo}\nLimite: R$ ${this.state.limite}\nEstudante?${this.state.estudante}`
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.aplication}>
          <Text style={styles.label}>Informe seu nome:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={(texto) => {
              this.setState({ nome: texto });
            }}
            placeholder="Nome"
          ></TextInput>

          <Text style={styles.label}>Informe sua idade:</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={(texto) => {
              this.setState({ idade: texto });
            }}
            placeholder="Idade"
          ></TextInput>

          <Text
            style={styles.label}
            onChangeText={(texto) => {
              this.setState({ idade: texto });
            }}
          >
            Sexo
          </Text>
          <Picker style={styles.inputs}
          selectedValue={this.state.sexo}
          onValueChange={(item)=>{this.setState({sexo:item})}}
          >
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Feminino" value="feminino" />
            <Picker.Item label="Outro" value="outro" />
          </Picker>

          <Text style={styles.label}>Limite: R${this.state.limite}</Text>
          <Slider
            style={styles.inputs}
            minimumValue={0}
            maximumValue={2500}
            onValueChange={(vl) => {
              this.setState({ limite: vl.toFixed(2) });
            }}
            minimumTrackTintColor="#00ff00"
            maximumTrackTintColor="#ff0000"
          />

          <Text style={styles.label}>Estudante?</Text>
          <Switch style={styles.inputs}  
          value={this.state.estudante}
          onValueChange={(estado)=>{
            this.setState({estudante:estado})}}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.verificar();
            }}
          >
            <Text style={styles.lbBt}>Enviar</Text>
          </TouchableOpacity>
        </View>
        {/* View para mostrar os dados na tela do app */}
        <View style={styles.data}>
          <Text style={styles.dataText}>Nome: {this.state.nome}</Text>
          <Text style={styles.dataText}>Idade: {this.state.idade}</Text>
          <Text style={styles.dataText}>Sexo: {this.state.sexo}</Text>
          <Text style={styles.dataText}>Limite: {this.state.limite}</Text>
          <Text style={styles.dataText}>Estudante? {this.state.estudante}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  aplication: {
    display: "block",
    marginTop: 40,
    paddingTop: 50,
    height: "85%",
    backgroundColor: "#ffe",
  },
  label: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 40,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#003555",
    color: "#fff",
  },
  inputs: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    backgroundColor: "#fff",
    height: 40,
  },
  lbBt: {
    marginLeft: 10,
    marginRight: 10,
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#00bb00",
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
  },

  data: {
    marginTop: 50, // ajuste para que o input fique no centro da tela
    display: "none",
    flex: 1,
    backgroundColor: "white",
  },
  dataText: {
    marginTop: 50,
    fontSize: 25,
  },
});
