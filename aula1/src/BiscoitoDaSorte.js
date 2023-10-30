import react, { Component } from 'react'
import {View, Text,Image, StyleSheet,TouchableOpacity} from 'react-native'

export default class Biscoito extends Component{

constructor(props){
  super(props)
  this.state = {
    img: require('../res/biscoito.png'),
    textoFrase:'Quebre o biscoito e descubra sua sorte'
  };
  this.frases=['siga os bons e aprenda com eles',
  'a virtude dos sabios e a felicidade',
  'o homem é filho do sol e da lua',
  'a alegria de pobre dura pouco',
  'antes só do que mal acompanhado'
];

this.sortearFrase = this.sortearFrase.bind(this)
this.reiniciar = this.reiniciar.bind(this)
}

sortearFrase(){
  let indiceAleatorio= Math.floor((Math.random() * this.frases.length)); 
  this.setState({
    textoFrase : this.frases[indiceAleatorio],
    img:require('../res/biscoitoAberto.png')
  })
 
}

reiniciar(){
  this.setState({
    textoFrase :'Quebre o biscoito e descubra sua sorte',
    img:require('../res/biscoito.png')
  })
}



render(){
  return( 
    <View style ={styles.container}>
   
      <Image style ={styles.image1} source={this.state.img}/>
      <Text style ={styles.texto}>" {this.state.textoFrase} " </Text>
      <TouchableOpacity  style ={styles.textButton} onPress={this.sortearFrase}>
      <Text style ={styles.texto1}>Quebrar o Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity  style ={styles.textButton} onPress={this.reiniciar}>
      <Text style ={styles.texto1}>Reiniciar</Text>
      </TouchableOpacity>

    </View>
  )
}
}

const styles =  StyleSheet.create(

  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
    image1:{
      width:200,
      height:200,
      justifyContent:'center'
    },
    texto:{
      fontSize :20 ,
      color:"#000",
    },
    texto1:{
      fontSize :25 ,
      color:"#000",
    },
    textButton:{
      backgroundColor:'#bb762200',
      width:230,height:50,
      borderWidth:2,
      alignItems:'center',
      justifyContent:'center',
      borderStyle:'solid',
      borderColor:'red',
      borderRadius:25
      
    }
  }
)
