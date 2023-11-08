
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
/**utilizando o expo nãoo é necessario baixar nada para utilizar os icones
 * o endereço, caso deseje conhecer os icones que são u tilizados no react navire e o seguinte:
 * https://icons.expo.fyi/
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>sujeito programador</Text>

      {/* abaixo a forma como devemos utilizar os icones */}
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <AntDesign name="checksquare" size={25} color="blue" />

      {/* icone do youtube */}
  
      <TouchableOpacity style={styles.icotube}>
      <SimpleLineIcons  name="social-youtube" size={36} color="white" />
    <Text style={styles.textSocial}>Acesse o canal </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icotube:{
   flexDirection:'row',
   backgroundColor:'#ff0000',
   alignItems:'center',
   justifyContent:'center',
    width:250,
    borderColor:'#000',
    borderWidth:2,
    borderRadius:10
  },
  textSocial:{
    fontSize:24,
    marginLeft:8,
    color:'white'
  }
});
