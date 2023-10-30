import { Component } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import { Entrar } from "./entrar";

/* Vamos entender o uso do recurso modal 
estamos criando uma classe chamada entrar e ela é chamada no click do botão
quando o usuario clica o modal fica visivel e chama a classe*/

export class ModalTeste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.entrar = this.entrar.bind(this);
  }

  //essa função vai tornar o modal aberto
  entrar() {
    this.setState({ modalVisible: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="entrar" onPress={this.entrar} />
        <Modal visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Entrar />
            <Button
              title="sair"
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex:1,

    height:200,
    alignItems: "center",
    justifyContent: "center",
  },
});
