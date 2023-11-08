import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

const Contato =  () => {
    const naveg = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text>Minha tela de navegação</Text>
            <Button title="Voltar" onPress={() => naveg.goBack()} />
            <Button title="Início" onPress={() => naveg.dispatch(StackActions.popToTop())} />
        </View>
    );
}

export default Contato;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
