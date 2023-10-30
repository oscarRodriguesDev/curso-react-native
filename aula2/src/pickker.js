import react, { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";

export default class Pickker extends Component {
  /* Picker é um elementos de lista semelhante ao select do html, nesse arquivo é demonstrado como utiliza-lo e 
os metodos usados para manipulação dele */

constructor(props){
    super (props); //chama o construtor da classe pai
    this.state={
        pizza:1,
        pizzas:[
            {key: 1 , nome:'Peperoni', preco:30.00},
            { key : 2 ,nome:'Mussarela' ,preco:50.00 },
            { key : 3 ,nome:'Portuguesa' ,preco:70.00 },
            { key : 3 ,nome:'Brigadeiro' ,preco:60.00 }

        ]

    }
}
  render() {
    let pizzasRender =  this.state.pizzas.map((v,k)=>{
        return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
        onValueChange ={(itemValue, itemIndex)=>{this.setState({pizza:itemValue})}}
        selectedValue={this.state.pizza}
        >
        
         {pizzasRender}
        </Picker>

        <Text style={styles.pizza}>Você escolheu pizza de {this.state.pizzas[this.state.pizza].nome}  </Text>
        <Text style={styles.pizza}>R$ {this.state.pizzas[this.state.pizza].preco.toFixed(2)}</Text>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  logo: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  pizza: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "center",
  },
});
