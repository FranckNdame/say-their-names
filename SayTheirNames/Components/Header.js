import React from 'react'   
import {View, SafeAreaView, Text, Image} from 'react-native'   

const Header = () =>{

    return(

        <SafeAreaView>
            <View style={{flex:1, alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                <Image source = {require("../Assets/logo.png")} 
            style={{width:20,marginRight:5, height:20}}/>
            <Text>SAY THEIR NAMES</Text>
            </View>
            
        </SafeAreaView>
    )
}
export default Header;