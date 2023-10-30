import {Component} from 'react'
import { View, Image,StyleSheet,Text } from 'react-native'

export default class Postagem extends Component{

    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.legend}>Legenda da foto</Text>
                <Image source={require('./img/nft.webp')} style={styles.post }/>
                <View style={styles.options}>
                <Image source={require('./img/like.png')} style={styles.opt }/>
                <Image source={require('./img/likeada.png')} style={styles.opt }/> 
                <Image source={require('./img/send.png')} style={styles.opt }/> 
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    post: {
        width: 400,
        height: 450,
    },
    container:{
        flex:1,
        marginTop:-500,
        alignItems:'center'
    },
    legend:{
        marginRight:90,
        fontSize:20,
        width:300
    },
    opt:{
        width:25,
        height:25,
    },
     options:{
        
        flexDirection:'row',
       marginRight:300
    }
})