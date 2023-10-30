import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFilm from './src/services/fimes';
import Conversor from './src-conversor/coversor';

export default function App() {
  return (
    <View style={styles.container}>
 {/* definição status bar */}
 <StatusBar style="auto" />
 {/* 
 
 <Conversor/>
*/}
<MyFilm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems:'center',
    justifyContent:'center'
   
   
  },
});
