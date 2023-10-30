import react, { Component } from "react";
import { View,StyleSheet,Text } from "react-native";
import Slider from "@react-native-community/slider";

export default class Slide extends Component {

    constructor(props){
        super(props);
        this.state={
            valor:0
        }
    }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center'}}>
        <Slider
          style={styles.slide}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(vl)=>{
              this.setState({valor:vl.toFixed(0)})
          }}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#ff0000"
        />
        <Text style ={styles.texto}>{this.state.valor}</Text>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
    slide: {
        marginTop:50,
        marginLeft:10,
        width:'95%',
        height:'3%' ,
        backgroundColor : '#fff',

    },
    texto:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:25
    
    }
})


