import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const { navigate } = useNavigation();

  const navigateToDesafio = () => {
    navigate('DesafioScreen');
  };

  const navigateToBike = () => {
    navigate('BikeScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/backgroundHome.jpg')}
        style={styles.imageBackground}
      >
        <View>
        <Text style={styles.title}>Bem-vindo ao Baze </Text>
        </View>

        {/* <View>

          <Text style={styles.texto}>Escolha sua rota</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToBike}
        >
          <Text style={styles.buttonText}>Mapa</Text>
        </TouchableOpacity> */}

        <View>

          <Text style={styles.texto}>Cadastre sua bike de forma simples</Text>
          <Text style={styles.texto2}>Pedale com segurança!</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToBike}
        >
          <Text style={styles.buttonText}>Cadastrar Bike</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.texto}>Desafie-se a cada pedalada!</Text>
          <Text style={styles.texto2}>Confira os desafios disponíveis</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={navigateToDesafio}
        >
          <Text style={styles.buttonText}>Ver Desafios</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    colorcolor: '#313338',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(45deg, #35badd, #ffffff)',
    
  },
  texto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 80,
    
  },

  texto2: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold', 
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,

  },
  
  button: {
    padding: 15,
    backgroundColor: '#35badd',
    borderRadius: 12,
    
  },
  buttonText: {
    fontSize: 16,
    
  },
});
