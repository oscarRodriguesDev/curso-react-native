import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Licao6 extends Component {
  render() {
    return (
     
      <View
        style={{
          flex: 1,
          marginTop: 25,
          backgroundColor: "#fff",
          flexDirection: "colunm",
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        {/*para usar o valor stretch, as View filhas não podem ter 
        largura fixa, observe como fica o layout com essa propriedade*/}
        <View style={styles.sec}></View>
        <View style={styles.sec2}></View>
        <View style={styles.sec3}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sec: {
    height: 50, //ajustando a propriedade flex, eu consigo alterar o tamanho dos elementos na tela
    backgroundColor: "green",
  },
  sec2: {
    height: 50,
    backgroundColor: "red",
  },
  sec3: {
    // width: 50, precisa retirar essa propriedade para funcionar
    height: 50,
    backgroundColor: "yellow",
  },
});
