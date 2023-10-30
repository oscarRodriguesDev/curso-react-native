import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text,TouchableOpacity } from "react-native";

export default class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
       tarefas:[
        {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        },
        {
          nome: "louças do almoço",
          descricao: "lavar toda a louça do almoço",
          valor: 2.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        },
        {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        }, {
          nome: "louças do café da manhã",
          descricao: "lavar toda a louça do café da manhã",
          valor: 1.0,
          status: "tarefa não realizada",
          avaliada: "não avaliada",
          responsavel: null,
        },
      ]
  
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.tarefas}
          renderItem={({ item }) => <Pessoa data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rendered: {
    backgroundColor: "#ffd",
    marginTop: 20,
    marginLeft:5,
    marginRight:5,
    borderWidth:1,
    paddingLeft:6,
    borderColor:'black',
    borderRadius:10
  },
  nomeTarefa:{
    color:'#000',
    fontSize:18,
    fontWeight:'bold'
  },
  descTarefa:{
    color:'#000',
    fontSize:16,
    fontWeight:'600'
  },
  valorTarefa:{
    color:'#f1aa',
    fontSize:18,
    fontWeight:'600'
  }
});

class Pessoa extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.rendered} onLongPress={()=>{alert('pressinou por tempo longo')}}>
        <Text style={styles.nomeTarefa}>{'Nome: '+this.props.data.nome}</Text>
        <Text style={styles.descTarefa}>{'Descrição: '+this.props.data.descricao}</Text>
        <Text style={styles.valorTarefa}>{'Valor: '+ this.props.data.valor}</Text>
        <Text>{'Status: '+ this.props.data.status}</Text>
        <Text>{'Avaliado '+ this.props.data.avaliada}</Text>
      </TouchableOpacity>
    );
  }
}
