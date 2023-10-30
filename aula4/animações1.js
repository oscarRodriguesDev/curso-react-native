import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, Animated,View } from "react-native";

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      laranimado:new Animated.Value(150),
      altanimado:new Animated.Value(25)
  } 
  Animated.timing(
    this.state.laranimado,

    {
      toValue:500, 
      duration:2000,
      useNativeDriver:false
      
    
  }).start()
    //escolhe qual propriedade vai ser animada


  }
render(){
  return (
    <View style={styles.container}>
      <Text>animações</Text>
      <Animated.View
        style={{
          width: this.state.laranimado,
          height: this.state.altanimado,
          backgroundColor: "#4961e1",
          justifyContent: "center",
        }}
      >
        <Text style={{textAlign:'center'}}>animation</Text>
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
