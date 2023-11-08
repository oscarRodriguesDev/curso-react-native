import { useLayoutEffect } from "react";
import { View, Text,StyleSheet,Button } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";

//essa vai ser a pagina home do app


const AboutScreen = ({/* route */}) => {
  //outra forma de utilizar é importando o use route  e instanciando 
  const route = useRoute()
    const naveg =  useNavigation()

    //podemos alterar por exemplo o nome da tela em tempo de execução
  
    useLayoutEffect(()=>{naveg.setOptions(

      //dessa forma podemos alterar o nome da pagina em tempo de execução
      {title:route.params.nome ==='' ? 'Sobre':  route.params.nome}
    )})
   
 


  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button title="Contato" onPress={
        ()=>naveg.navigate('Contato')}/>
       
    </View>
  );
};

export default AboutScreen
const styles =  StyleSheet.create({
    container: { 
        flex:1 ,    
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
        },
})
  
