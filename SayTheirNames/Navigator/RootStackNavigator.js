import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import * as RootNavigation from './RootNavigation.js';
import  Header  from '../Components/Header';
const Root = createStackNavigator();

const RootStackNavigator =() => {


    return(
    <Root.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
     
        },
       /* header:() =>{
          return(
             <Header />
          );
         
        }*/
      }}>
    
         <Root.Screen name ="STN" component ={TabNavigator} 
               options={{
                headerTitle: "SAY THEIR NAMES",
}}
         />

    </Root.Navigator>
    )
    

}
export default RootStackNavigator;

