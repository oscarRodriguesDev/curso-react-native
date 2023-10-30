import react, {Component} from 'react'
import {View,StyleSheet, Switch,Text} from 'react-native'

export default class Switcher extends Component{
    constructor(props){
        super(props)
        this.state={
            status:false
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Switch sytle={styles.switch}
                value={this.state.status}
                onValueChange={(estado)=>{
                this.setState({status:estado})
                }}
                thumbColor="red"
             
                
                />
                <Text>{(this.state.status)?'ativo':'inativo'}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff',
justifyContent:'center',
alignItems:'center'
},

switch:{
  
}

})