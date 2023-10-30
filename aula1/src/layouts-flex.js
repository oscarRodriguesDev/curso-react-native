import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Licao5 extends Component {
  render() {
    return (
      //pro padrão o flex direction vem  como 'colunm'
      <View
        style={{
          flex: 1,
          marginTop: 25,
          backgroundColor: "#fff",
          flexDirection: "colunm",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* os valores para justfyContent quando em linha podem ser: center, flex-start 
               flex-end, space-between espace-around para o alignItens, vamos alinhas os elementos 
               na vertical, os valores podem ser: center, flex-end e flex-start se eu tiver usando o flexDirection
               colunm o justifyContent comanda a coluna e o alignItens comanda a linha falça testes*/}
        <View style={styles.sec}></View>
        <View style={styles.sec2}></View>
        <View style={styles.sec3}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sec: {
    width: 50,
    height: 50, //ajustando a propriedade flex, eu consigo alterar o tamanho dos elementos na tela
    backgroundColor: "green",
  },
  sec2: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  sec3: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
  },
});
