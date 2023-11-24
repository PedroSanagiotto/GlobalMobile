import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BikeScreen({ route }) {
  const [aro, setAro] = useState('');
  const [quadro, setQuadro] = useState('');
  const [peso, setPeso] = useState('');
  const [cor, setCor] = useState('');
  const [tipo, setTipo] = useState('');
  const [marcha, setMarcha] = useState('');
  const [bikeCadastrada, setBikeCadastrada] = useState(false);
  const [bikeInfo, setBikeInfo] = useState('');

  const cadastrarBicicleta = async () => {
    try {
      // Recupera o token armazenado
      const userToken = await AsyncStorage.getItem('authToken');
  
      const response = await axios.post(
        'http://192.168.0.2:8080/api/bicicletas',
        {
          aro,
          quadro,
          peso,
          cor,
          tipo,
          marcha,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
  
      console.log('Bicicleta cadastrada com sucesso!', response.data);
  
      setBikeCadastrada(true);
      setBikeInfo(`Bike ${response.data.id} cadastrada `);
    } catch (error) {
      console.error('Erro ao cadastrar bicicleta:', error);
    }
  };

  const cadastrarOutraBike = () => {
    // Limpa o estado e permite cadastrar outra bike
    setBikeCadastrada(false);
    setAro('');
    setQuadro('');
    setPeso('');
    setCor('');
    setTipo('');
    setMarcha('');
  };

  return (
    <View style={styles.container}>
 

      <Text style={styles.title}>Cadastro Bicicleta</Text>

      {bikeCadastrada ? (
        <View>
          <Text style={styles.info}>{bikeInfo}</Text>
          <Pressable style={styles.button} onPress={cadastrarOutraBike}>
            <Text style={styles.buttonText}>Cadastrar outra bike</Text>
          </Pressable>
        </View>
      ) : (
        <View>
        <Text style={styles.label}>Aro:</Text>
        <TextInput
          style={styles.input}
          value={aro}
          onChangeText={setAro}
          placeholder="Digite o aro"
        />

        <Text style={styles.label}>Quadro:</Text>
        <TextInput
          style={styles.input}
          value={quadro}
          onChangeText={setQuadro}
          placeholder="Digite o quadro"
        />

        <Text style={styles.label}>Peso:</Text>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          placeholder="Digite o peso"
        />

        <Text style={styles.label}>Cor:</Text>
        <TextInput
          style={styles.input}
          value={cor}
          onChangeText={setCor}
          placeholder="Digite a cor"
        />

        <Text style={styles.label}>Tipo:</Text>
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={setTipo}
          placeholder="Digite o tipo"
        />

        <Text style={styles.label}>Marcha:</Text>
        <TextInput
          style={styles.input}
          value={marcha}
          onChangeText={setMarcha}
          placeholder="Digite a marcha"
        />

        <Pressable style={styles.button} onPress={cadastrarBicicleta}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        </View>
        )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#313338',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#313338',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    backgroundClip: 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(45deg, #35bbdd, #223333)',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#dcdcdc',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#313338',
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
