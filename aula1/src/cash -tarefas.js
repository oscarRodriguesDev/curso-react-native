import React, { Component } from "react";
import { StyleSheet, ScrollView,View, Text } from "react-native";


export default class Cash extends Component {
  render() {
    const tarefas = [
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
    ];

    return (
      <ScrollView style={styles.container}>
        {tarefas.map((tarefa, index) => (
          <View key={index} style={styles.tarefas}>
            <Text>Nome: {tarefa.nome}</Text>
            <Text>Descrição: {tarefa.descricao}</Text>
            <Text>Valor: {tarefa.valor}</Text>
            <Text>Status: {tarefa.status}</Text>
            <Text>Avaliada: {tarefa.avaliada}</Text>
            <Text>Responsável: {tarefa.responsavel}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#ffc",
    padding: 20,
  },
  tarefas: {
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
