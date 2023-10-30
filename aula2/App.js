import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Scroll from './src/scroolView';
import Flat from './src/flatList';
import Pickker from './src/pickker';
import Slide from './src/slider';
import Switcher from './src/switch';
import BancoReact from './src/desafio';
import Logotipo from './src/insta_logo';
import Postagem from './src/post';
import Asinc from './src/asyncstorage';
import { Modal } from 'react-native';
import { ModalTeste } from './src/modal';
import { Gasosa } from './src/desafioabastecer';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "000" }}>
      {/*
      <Scroll/> 
    <Flat/>
       <Pickker/>
       <Slide/>
       <Switcher />
       <BancoReact/>
       <Logotipo/>
       <Postagem/>
       <Asinc/>
       <ModalTeste/>
       */}
   <Gasosa/>
    </View>
  );
}


