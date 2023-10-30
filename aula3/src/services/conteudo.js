
import { Component } from 'react';
import { StyleSheet,View, Text, Modal,Image,TouchableOpacity, ScrollView,Button } from 'react-native';
export default class Conteudo extends Component {

  constructor(props) {
    super(props);
    this.state ={
      visible: false,
    }}
    render(){
        return (
            <ScrollView style={styles.container}>

              <Text style={styles.title}>{this.props.data.nome}</Text>
            <Image source={{uri:this.props.data.foto}}
            style={styles.imagem}
            />

            <TouchableOpacity style= {styles.btn} onPress={()=>{
              this.setState({visible:true})
            }}>
              <Text style={styles.textbtn}>Leia Mais...</Text>
            </TouchableOpacity>
           <Modal visible={this.state.visible}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

            <Text style={styles.textModal}>{this.props.data.sinopse}</Text>
            <Button title='Voltar' onPress={()=>{
              this.setState({visible:false})
            }}/>

            </View>
           </Modal>
            </ScrollView>
          );
        }
    }


const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#000',
    marginTop:15
  },
  title:{
   backgroundColor:'#4682B4',
   color:'#fff',
   marginTop:25,
  fontSize:18,
  fontWeight:'bold',
  
  },
  imagem:{
    width:400,
    height:300,
  }, 
  btn:{
    width:100,
    backgroundColor:'#564df0',
    borderWidth:2,
    borderColor:'#000',
    borderRadius:10

  },
  textbtn:{
    color:'#fff',
    fontWeight:'bold'
  },
  textModal:{
    fontSize:25,
    fontWeight:'bold',
   
  }
  
});
