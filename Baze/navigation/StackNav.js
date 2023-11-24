
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import CadastroScreen from '../pages/Cadastro';
import WelcomeScreen from '../pages/Welcome';

import BottomScreen from './Bottom-tabs';

import BikeScreen from '../pages/bicicleta';
import DesafioScreen from '../pages/desafios';

const Stack = createStackNavigator();


export default function NavigationApp() {
  return (
    <Stack.Navigator initialRouteName= "Welcome">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}}/>
      <Stack.Screen name= "Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name= "Bottom" component={BottomScreen} options={{headerShown: false}}/>

      <Stack.Screen name="BikeScreen" component={BikeScreen} />
      <Stack.Screen name="DesafioScreen" component={DesafioScreen} />

    </Stack.Navigator>
  )

}