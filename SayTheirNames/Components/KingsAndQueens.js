import React from 'react'   
import {View,Text, FlatList,Image, TouchableOpacity} from 'react-native' ;
import PersonPreview from './personPreview';
import Generic from '../Style/generic'
const KingsAndQueens = (props) =>{

    const people = [
        {
            id:1,
            name:"George Floyd",
            image: require("../Assets/george.jpg"),
            date:"25.05.2020"
        },
        {
            id:2,
            name:"Breonna Taylor",
            image: require("../Assets/breonna.jpg"),
            date:"18.05.2020"

        },
        {
            id:3,
            name:"Amhaud Arbery",
            image: require("../Assets/amhaud.jpg"),
            date:"23.02.2020"

        },
        {
            id:4,
            name:"Christian Taylor",
            image: require("../Assets/christian.jpg"),
            date:"10.04.2019"

        },
      
    ]

    return(
        <View style={{padding:5,  flex:1}}>
             <FlatList
                data={people}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => 
                    <PersonPreview name ={item.name} date ={item.date} image = {item.image} />
                }
                keyExtractor={item => item.id}
            /> 
        </View>
    )
}
export default React.memo(KingsAndQueens)