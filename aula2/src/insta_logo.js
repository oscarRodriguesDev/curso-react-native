import { Component } from "react";

import {View, Image, TouchableOpacity,Text,StyleSheet} from "react-native";

export default class Logotipo extends Component {
  render() {
    return (
    <View style={styles.container}>
         
     <Image source={require('./img/logo.png')} style={styles.logo}/>
    </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    logo:{
      width:150,
      height:50,
      marginTop:25,
      marginLeft:10
    
     
    },
    container:{
    flex:1

    }
  }
)
