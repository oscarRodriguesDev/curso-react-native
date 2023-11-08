import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';

const HomeScreen = () => {
  const [nome, setNome] = useState(''); // Use o nome como estado, não "_nome"

  function navegaSobre() {
    naveg.navigate('Sobre', { nome: nome, email: 'kk@gmail.com' });
  }

  const naveg = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Sobre" onPress={navegaSobre} />

      {/* Use onChangeText para atualizar o estado */}
      <TextInput
        onChangeText={(text) => setNome(text)} // Use onChangeText em vez de onChange
        value={nome} // O valor do TextInput deve ser controlado pelo estado "nome"
        placeholder="Digite seu nome"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
