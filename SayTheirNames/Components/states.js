import React from 'react'   
import {View,Text, FlatList, TouchableOpacity} from 'react-native'   
import Generic from '../Style/generic'
const States = (props) =>{

    const states = [
        {
            id:1,
            name:"All",
            country:'World'
        },
        {
            id:2,
            name:"Missouri",
            country:'USA'
        },
        {
            id:3,
            name:"Colorado",
            country:'USA'
        },
        {
            id:4,
            name:"Washington",
            country:'USA'
        },
        {
            id:5,
            name:"California",
            country:'USA'
        },
        {
            id:6,
            name:"Chicago",
            country:'USA'
        },
        {
            id:7,
            name:"Florida",
            country:'USA'
        }
    ]

    return(
        <View style={{paddingTop:15, paddingBottom:15}}>
             <FlatList
                data={states}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => 
                    <View style={item.id == 1?Generic.stateSelected:Generic.state}>
                    <TouchableOpacity style={{}}>
                    <Text style={{alignSelf:'center', color:item.id==1?'#fff':'#000'}}>{item.name}</Text>
                </TouchableOpacity>
                </View>
                }
                keyExtractor={item => item.id}
            /> 
        </View>
    )
}
export default React.memo(States)