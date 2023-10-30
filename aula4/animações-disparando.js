import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Animated } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laranimado: new Animated.Value(100),
      altanimado: new Animated.Value(100),
    };

    this.iniciar = this.iniciar.bind(this);

    Animated.sequence([
      Animated.timing(this.state.laranimado, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.laranimado, {
        toValue: 320,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]);
  }

  /* Para disparar animações basta crialas dentro de uma função e chamaar com o click de um botão por exemplo */

  iniciar() {
    Animated.sequence([
      Animated.timing(this.state.laranimado, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.laranimado, {
        toValue: 320,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <TouchableOpacity
            onPress={this.iniciar}
            style={{
              width: 80,
              height: 40,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text>gerar animação</Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          style={{
            width: this.state.laranimado,
            height: this.state.altanimado,
            backgroundColor: "#005800",
            justifyContent: "center",
          }}
        >
            <Text style={{color:'white', fontSize:18,fontWeight:'bold'}}>150%</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
