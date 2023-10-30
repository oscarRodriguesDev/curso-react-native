import React, {Component} from 'react';
import {View,Text,Image} from 'react-native'

let nome='Oscar'
let img ='https://sujeitoprogramador.com/steve.png' //atribuimos a url da imagem a uma variavel

export   default  function Licao1(){
  return(
  <View>
<Text>Ola mundo!</Text>
<Text>My first app</Text>
<Text>{nome}</Text>
{/*
*assim podemos referenciar uma imagem no react native
<Image source={{uri:img } }
      style={{width: this.props.largura,height:this.props.altura}}//usndo o props para acessar o valor
      /> */}
<Text style={{color:'red', fontSize:25,margin:15}}>Sujeito programador</Text>
<Job largura={500} altura={200} descrição = {'foto do Steve Jobs'}/>
  </View>
  )
} 

class Job extends Component{
  render(){
    return(
      <View>
      <Image source={{uri:img}}
      //usando props
      style={{width: this.props.largura,height:this.props.altura}}//usndo o props para acessar o valor
      //caso eu queira colocar mais de um componente nativo no meu componente principal
      //preciso adcionar uma view
      />
      <Text>{this.props.descrição}</Text>
      </View>
    )
  }

}



