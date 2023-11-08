/* para usar o NavigatorContainer com expo deves prosseguir da seguinte forma
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install @react-navigation/stack  

a seguir as seguintes importações:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
*/

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/home/index'
import AboutScreen from './src/pages/sobre/sobre'
import Contato from './src/pages/contato/contatos'


const stack =  createStackNavigator()

const App = ()=>{
return(
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen
       name="Home"
       /* podemos dar um titulo para a screen utilizando a propiedade title */
       /* utilizando a propriedade options podemos alterar uma serie de 
       aspectos da tela  */
       options={{
        title:'Pagina inicial',
        headerStyle:{
          backgroundColor:"#7d40e7", //define o backgroud do header da pagina
        },
        headerTintColor:"#fff", //define a cor de texto do header da pagina
        }
       }
       //tela sobre
       component={HomeScreen} />
      <stack.Screen 
      name="Sobre"
      
      options={{
        headerShown:true //tira o header da pagina
      }}
      component={AboutScreen}/>

    


      <stack.Screen 
      name="Contato"
      options={{
        headerShown:true //tira o header da pagina
      }}
      component={Contato}/>
    </stack.Navigator>
  </NavigationContainer>
  )
}

export default App