import React, { Component } from "react";
import { StyleSheet,Text,Dimensions  } from "react-native";
import { Animated } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laranimado: new Animated.Value(0),
      laranimado2 :  new Animated.Value(0),
      time:Math.random(2000),
    };

    //essa foi a forma que eu consegui fazer logo a seguir veremos a forma como 
    //o professor fez
    const screenWidth = Dimensions.get("window").width;
    const percentageWidth = (screenWidth * 100) / 100; 
    Animated.timing(this.state.laranimado, {
      toValue: percentageWidth,
      duration: 1500,
      useNativeDriver: false,
    }).start(); 

    Animated.timing(this.state.laranimado2, {
      toValue: 100,
      duration: 2500, 
      useNativeDriver: false,
    }).start(); 
  }

  //forma que o professor resolveu




  render() {
//variavel abaixo é para soluição do professor
/* A solução abaixo foi a do professor */
let porcentagem =  this.state.laranimado2.interpolate({
  inputRange: [0, 100],
  outputRange: ['0%', '100%']
})
    return (
      <Animated.View style={styles.container}>
        <Animated.View
          style={{
            backgroundColor: "#452c9f",
            width: this.state.laranimado,
            height: 25,
          }}
          
        >
         
        </Animated.View>

        
        <Animated.View
          style={{
            backgroundColor: "#00ff00",
            width: porcentagem,
            height: 25,
          }}
          
        >
         
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
}); 
