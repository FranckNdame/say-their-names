import React from 'react' ;
import {Image, Text, View} from 'react-native'
import Generic from '../Style/generic'
const Cover = (props) =>{

    return(
        <View style={Generic.Cover}>
            <Image source ={require("../Assets/blm.jpg")}
            style={{height:280, width:'100%', opacity:0.5}} />
            <Text style={{position:'absolute',
                color:"#fff", fontSize:20, fontWeight:'bold',            
            top:200,left:20, right:0, bottom:'auto'}}>
                #BLACKLIVESMATTER
            </Text>
            <Text style={{position:'absolute',
                color:"#fff", fontSize:17, fontWeight:'bold',            
            top:225,left:20, right:0, bottom:'auto'}}>
                How to get involved
            </Text>
        </View>
    )
}
export default Cover;