import React from 'react'
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'   
import Generic from '../Style/generic'
import States from '../Components/states'
import Cover from '../Components/cover'
import KingsAndQueens from '../Components/KingsAndQueens'
import { ScrollView } from 'react-native-gesture-handler'
const HomeScreen = (props) =>{

    return(
         <SafeAreaView style={{flex:1, backgroundColor:Generic.backgroundColor}}>
             <View style={{flex:1}}>
                 <States />
                 <ScrollView showsVerticalScrollIndicator={false}>
                    <Cover/>
                    <KingsAndQueens/>
                 </ScrollView>
                 
             </View>
         </SafeAreaView>
    )

}
export default React.memo(HomeScreen)