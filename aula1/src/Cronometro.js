import react, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0.0,
    };
    this.starter = this.starter.bind(this);
    this.stop = this.stop.bind(this);
    this.zerar = this.zerar.bind(this)
    //variavel do time
    this.timer = null;
  }

  starter() {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 0.1 });
    }, 100);
  }

  stop() {
    clearInterval(this.timer);
  }

  zerar(){
    this.setState({time : 0.0})
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagem}
          source={require("../res/cronometro.png")}
        />
        <Text style={styles.cron}>{this.state.time.toFixed(1)}</Text>

        <View style={styles.cx_button}>
          <TouchableOpacity style={styles.botao} onPress={this.starter}>
            <Text style={styles.bt_text}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.stop}>
            <Text style={styles.bt_text}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.zerar}>
            <Text style={styles.bt_text}>Zerar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    marginTop: 100,
    width: 200,
    height: 250,
  },

  container: {
    backgroundColor: "#222",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cron: {
    color: "white",
    fontSize: 36,
    position: "absolute",
    top: 340,
  },
  bt_text: {
    fontSize: 25,
    color: "white",
  },
  botao: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    marginTop: 25,
    padding: 12.5,
    margin: 25,
  },
  cx_button: {
    flexDirection: "row",
  },
});
