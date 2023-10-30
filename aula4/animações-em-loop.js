import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Animated } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laranimado: new Animated.Value(100),
      altanimado: new Animated.Value(100),
      opacidade: new Animated.Value(1),
    };

    Animated.loop(
      Animated.sequence(
          [
            Animated.timing(this.state.laranimado,{toValue:100,duration:500,useNativeDriver:false}),
            Animated.timing(this.state.laranimado,{toValue:320,duration:5000,useNativeDriver:false}),
          ]
    )).start()
     
       
    
    }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.laranimado,
            height: this.state.altanimado,
            opacity: this.state.opacidade,
            backgroundColor: "#4961e1",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            animation
          </Text>
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
