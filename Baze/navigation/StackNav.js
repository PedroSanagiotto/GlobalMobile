
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import CadastroScreen from '../pages/Cadastro';
import WelcomeScreen from '../pages/Welcome';

const Stack = createStackNavigator();


export default function NavigationApp() {
  return (
    <Stack.Navigator initialRouteName= "Welcome">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}}/>
      <Stack.Screen name= 'Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )

}