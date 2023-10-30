import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Licao4 extends Component {
  /* nessa lição vamos entender um pouco sobre tamanhos fixos e dinamicos */
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.sec}></View>
                <View style={styles.sec2}></View>
                <View style={styles.sec3}></View>
            </View>
        )
    }
}
const styles =  StyleSheet.create(
    {
   
    sec:{
        height:65,//ajustando a propriedade flex, eu consigo alterar o tamanho dos elementos na tela
        backgroundColor:"#222"
    },
    sec2:{
        flex:1,
        backgroundColor:"#fff"
    },
    sec3:{
        height:65,
        backgroundColor:"#222"
    }
    }
)
