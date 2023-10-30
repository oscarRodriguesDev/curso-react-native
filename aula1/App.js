import react, { Component } from "react";
import { View } from "react-native";
/**Esse vai ser nosso arquivo principal onde vamos colocar todos nossos arquivos
 * vamos comentando os blocos não utilizados, e deixar apenas o da aula corrente, as importações
 * ab aixo são os blocos que estaremos estudando
 */

import Licao1 from "./src/referencia-de-imagens";
import Licao2 from "./src/states";
import Licao3 from "./src/styles";
import Licao4 from "./src/flex";
import Licao5 from "./src/layouts-flex";
import Licao6 from "./src/propriedades";
import Licao7 from "./src/inputs";
import Cash from "./src/cash -tarefas";
import Biscoito from "./src/BiscoitoDaSorte";
import Timer from "./src/Cronometro";




export default class App extends Component {
  render() {
    return (
      // na nossa view vamos mante a co abaixo, lembran do que essa view é a principal do nosso programa
      <View style={{ flex: 1, backgroundColor: "#1010f" }}>
        {/* 
       As lições passadas ficam no bloco de comentarios
       <Licao1 />
        <Licao2 />
        <Licao3/>
      <Licao4/>
    <Licao5/>
  <Licao6/>
  <Licao7/>
  <Cash/>
  <Biscoito/>
  <Timer/>
  */
<Cash/>
}
      </View>
    );
  }
}
