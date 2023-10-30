import react, { Component } from "react";
import { StyleSheet } from "react-native";
import { View,Text, ScrollView } from "react-native";

export default class Scroll extends Component {
  render() {
    /**Veja abaixo como o componente ScrowView pode ser usado */
    /* algumas props do ScrollView */
    //showsVerticalScrollIndicator ={false} tira a barra de rolagem
    //showHorizontalScrollIndicator= {false} tira a barra de rolagem horizontal
    //horizontal={true} inverte a lista para horizontal, mas devemos adcionar width aos elementos
    
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
       <View style={styles.box1}></View>
       <View style={styles.box2}></View>
       <View style={styles.box3}></View>
       <View style={styles.box4}></View>
       </ScrollView>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container:{
    
    backgroundColor:'green'
  },
  box1:{
 
    backgroundColor:'green',
    
    height:250
  },
  box2:{
   
    backgroundColor:'red',
    height:250
  },
  box3:{
  
    backgroundColor:'yellow',
    height:250
  },
  box4:{
    flex:1,
    backgroundColor:'blue',
    height:250
  }
})
