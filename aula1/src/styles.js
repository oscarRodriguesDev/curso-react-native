/* Nessa aula vamos entender sobre os grupos de estilos */
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native"; //precisa importar o StyleSheet

export default class Licao3 extends Component {
  render() {
    return (
      <View style={styles.area}>
        {/* Assim podemos aplicar mais de um estilo */}
        <Text style={[styles.text1, styles.alinhar]}>Eu sou Texto 1</Text>
        <Text style={styles.text2}>Eu sou Texto 2</Text>
        <Text style={styles.alinhar}>Eu sou Texto 3</Text>
        <Text style={styles.area}>Eu sou Texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //os estilos serão criados aqui
  area: {
    marginTop: 30,
    marginLeft: 150,
  },
  text1: {
    fontSize: 35,
    color: "rgb(100,50,200)",
    marginLeft: -150,
  },
  text2: {
    fontSize: 20,
    color: "red",
    marginLeft: -120,
  },
  alinhar: {
    textAlign: "center",
    marginLeft: -150,
    color: "green",
  },
});
