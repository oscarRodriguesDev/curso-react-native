import { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

/* Vamos entender o uso do recurso modal */

export class Entrar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text>Olá, eu sou um modal!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,

    justifyContent: "center",
    alignItems: "center",
  },
});
