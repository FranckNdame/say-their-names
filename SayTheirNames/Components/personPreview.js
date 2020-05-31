import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';

const PersonPreview = (props) =>{
    return(
        <View>
        <TouchableOpacity style={{}}>
            <Image source={props.image}
            style={{height:250,margin:5, borderRadius:5, width:200}} />
        <Text style={{alignSelf:'center', fontWeight:'bold'}}>{props.name}</Text>
        <Text style={{alignSelf:'center'}}>{props.date}</Text>

    </TouchableOpacity>
    </View>
    )
}
export default React.memo(PersonPreview)