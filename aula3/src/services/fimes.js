
import { Component } from 'react';
import { StyleSheet, Text, View,FlatList, ActivityIndicator } from 'react-native';
import api from './api';
import Conteudo from './conteudo';

export default class MyFilm extends Component {

    constructor(props){
        super(props)
        this.state={
            filmes:[],
            loading:true,
        }
    }

async componentDidMount(){
 const response = await api.get('r-api/?api=filmes')
 this.setState({
    filmes:response.data,
    loading:false
  
 }) 

}

    render(){

        if(this.state.loading){
           return(
            <View>
           <ActivityIndicator color='white' size='100px' style={{marginTop:'100%'}}/>
            </View>
           )  
        }else{
            return (
                <View style={styles.container}>
                <FlatList
                data={this.state.filmes}
                keyExtractor={item => item.id}
                renderItem={ ({item})=><Conteudo data={item}/>}
                />
                </View>
              );
        }
   
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
});
