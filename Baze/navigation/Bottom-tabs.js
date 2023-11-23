import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../pages/Home';
import BikeScreen from '../pages/bicicleta';
import DesafioScreen from '../pages/desafios';

const homeName = "Home";
const bikeName = "Bike";
const desafioName = "Desafio";


const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    
      <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === bikeName){
              iconName = focused ? 'bike' : 'bike'; 
            }

            if (rn === homeName) {
                iconName = focused ? 'home' : 'home';
  
              }

            if (rn === desafioName){
              iconName = focused ? 'assistant' : 'assistant'; 
            }
 
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            
          },
          screenOptions: {
            tabBarActiveTintColor: '#35bbdd',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10,},
            tabBarStyle: [
              {
                padding: 10, height: 70,
                "display": "flex"
              },
              null
            ]
          }
        })}>

        
        <Tab.Screen name={bikeName} component={BikeScreen} options={{headerShown: false}}/>
        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name={desafioName} component={DesafioScreen} options={{headerShown: false}}/>

      </Tab.Navigator>
    
  );
}

export default TabNav;