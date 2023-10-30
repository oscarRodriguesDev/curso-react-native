
import React, {Component} from 'react';
import { render } from 'react-dom';
import {View,Text, Button} from 'react-native'

 export default class Licao2 extends Component{

    constructor(Props){
        super(Props)
        this.state={
            nome: ''
        }
        this.entrar =  this.entrar.bind(this)
    }

    entrar(texto){
        this.setState({nome:texto})
    }
    render(){
        return(
            <View>
                <Button title='Entrar' onPress={()=>this.entrar('teste')}/>
                <Text>{this.state.nome}</Text>
            </View>
        )
    }
}


