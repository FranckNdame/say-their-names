import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen'
import DonationScreen from '../Screens/Donations'
import PetionScreen from '../Screens/Petition'
import EventsScreen from '../Screens/Events'
const Tab = createBottomTabNavigator();

const TabNavigator = (navigation) =>{

    return(

    
      <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
         
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Donation') {
                iconName = 'ios-heart';
            } else if (route.name === 'Home') {
              iconName = 'ios-home';
            }
            else if(route.name ==='Petition'){
              iconName = 'ios-flashlight';
            }
            else{
                iconName = 'ios-calendar'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"#000"} />;
          },
          tabBarVisible: ()=>{
            console.log("routes : " + route);
            return true;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#9C9C9C',
          tabStyle:{
            backgroundColor:"#fff"
          }
        }}>
          <Tab.Screen name ="Home" component = {HomeScreen} />
          <Tab.Screen name ="Donation" component = {DonationScreen} />
          <Tab.Screen name ="Petition" component = {PetionScreen} />
          <Tab.Screen name ="Events" component = {EventsScreen} />


      </Tab.Navigator>
  );
}
export default TabNavigator;